s3sync = require 's3-sync'
readdirp = require 'readdirp'

creds = require './creds'

files = readdirp
  root: __dirname + '/public'
  directoryFilter: ['!cache', '!node_modules']

uploader = s3sync(creds).on 'data', (file) ->
  console.log file.fullPath + ' -> ' + file.url

files.pipe uploader
