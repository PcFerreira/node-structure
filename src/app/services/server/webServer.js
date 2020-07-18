const http = require('http')
const express = require('express')
const morgan = require('morgan')
const router = require('../../router/router')
const webServerConfig = require('../../../configs/webServerConfig')

let httpServer

function initializeServer () {
    return new Promise((resolve, reject) => {
      const app = express()
  
      httpServer = http.createServer(app)
  
      app.use(morgan('combined'))

      app.use('/api', router)
  
      httpServer.listen(webServerConfig.port)
        .on('listening', () => {
          console.log(`Web Server Started on port: ${webServerConfig.port}`)
          resolve()
        })
        .on('error', err => {
          reject(err)
        })
    })
  }
  module.exports.initializeServer = initializeServer

  function stopServer () {
    return new Promise((resolve, reject) => {
      httpServer.close((err) => {
        if (err) {
          reject(err)
          return
        }
        resolve()
      })
    })
  }
  module.exports.stopServer = stopServer