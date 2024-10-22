// https://stackoverflow.com/a/65862128/1217627

import { promises as fs, createReadStream } from 'fs'
import * as path from 'path'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import mime from 'mime-types'

import credentials from './creds'

async function uploadDir(localFolder: string) {
  const s3Client = new S3Client({
    region: credentials.region,
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
    },
  })

  // Recursive getFiles from
  // https://stackoverflow.com/a/45130990/831465
  async function getFiles(dir: string): Promise<string | string[]> {
    const dirents = await fs.readdir(dir, { withFileTypes: true })
    const files = await Promise.all(
      dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name)
        return dirent.isDirectory() ? getFiles(res) : res
      })
    )
    return Array.prototype.concat(...files)
  }

  const files = (await getFiles(localFolder)) as string[]
  const uploads = files.map(async (filePath) => {
    const fileStream = createReadStream(filePath)
    const command = new PutObjectCommand({
      Bucket: credentials.bucket,
      Key: path.relative(localFolder, filePath),
      Body: fileStream,
      ContentType: mime.lookup(filePath) || undefined,
      ACL: 'public-read',
    })
    const result = await s3Client.send(command)
    console.log(`Uploaded: ${filePath}`)
    return result
  })
  const results = await Promise.all(uploads)
  console.log('All files uploaded successfully')
  return results
}

;(async () => {
  await uploadDir(path.resolve('./public'))
})()
