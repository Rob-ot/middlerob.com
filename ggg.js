module.exports = {
  start: "./node_modules/.bin/coffee app.coffee",
  install: "npm install && git submodule init && git submodule update",

  servers: {
    middlerob: "root@middlerob.com"
  }
}