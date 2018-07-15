const s3sync = require('s3-sync')
const readdirp = require('readdirp')

const creds = require('./creds')

const files = readdirp({
  root: __dirname + '/public',
  directoryFilter: ['!cache', '!node_modules']
})

uploader = s3sync(creds).on('data', (file) => {
  console.log(file.fullPath + ' -> ' + file.url)
})

files.pipe(uploader)
