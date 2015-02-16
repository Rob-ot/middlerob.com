
Metalsmith = require 'metalsmith'
jade = require 'metalsmith-jade'
stylus = require 'metalsmith-stylus'
asset = require 'metalsmith-static'
npm = require 'npm'

npm.load prefix: __dirname + '/public/facebook-photo-collage', (err) ->
  return console.error err if err

  npm.commands.install (err) ->
    return console.error err if err

    npm.commands['run-script'] ['build'], (err) ->
      return console.error err if err
      console.log 'fb photo viewer done'


      metalsmith = Metalsmith __dirname

      metalsmith.use jade()

      metalsmith.use stylus
        compress: true
        nib: true

      metalsmith.use asset
        src: 'public'
        dest: '.'

      metalsmith.build (err) ->
        console.error err if err
        console.log 'metalsmith done'
