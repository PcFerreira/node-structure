/**
* Dependencies.
*/
const webServer = require('./services/server/webServer')

/**
* Startup the app
*/
async function startupApp () {
    console.log('Starting Up..')
    try {
        console.log('Initializing Web Server..')
        await webServer.initializeServer()
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
startupApp()

/**
 * Stops the app
 */

async function shutdown (e) {
    let err = e
    console.log('Shutting down application')
  
    try {
      console.log('Stopping the Web Server...')
      await webServer.stopServer()
    } catch (e) {
      console.error(e)
      err = err || e
    }
  
    console.log('Exiting process')
  
    if (err) {
      process.exit(1) // Non-zero failure code
    } else {
      process.exit(0)
    }
  }


/**
* Handling the 'SIGTERM' and 'SIGINT' signals
*/

process.on('SIGTERM', () => {
    console.log('Received SIGTERM')
    shutdown()
})

process.on('SIGINT', () => {
    console.log('Received SIGINT')
    shutdown()
})

process.on('uncaughtException', err => {
    console.log('Uncaught exception')
    console.error(err)
    shutdown(err)
})
