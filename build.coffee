
npm = require 'npm'

npm.load prefix: __dirname + '/public/facebook-photo-collage', (err) ->
  return console.error err if err

  npm.commands.install (err) ->
    return console.error err if err

    npm.commands['run-script'] ['build'], (err) ->
      return console.error err if err
      console.log 'fb photo viewer done'

