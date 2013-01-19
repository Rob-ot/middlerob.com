express = require 'express'
stylus = require 'stylus'
nib = require 'nib'
poet = require 'poet'

app = express()
poet = poet app

poet
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init()

app.set 'view engine', 'jade'
app.set 'views', __dirname + '/views'

app.use stylus.middleware
  src: __dirname + '/public'
  compile: (str, path) ->
    stylus(str)
      .set('filename', path)
      .set('compress', true)
      .use(nib())
      .import('nib')

app.use express.static __dirname + '/public'
app.use app.router

app.get '/', ( req, res ) ->
  res.render 'index'

app.listen 80