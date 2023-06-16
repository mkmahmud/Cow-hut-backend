// getting-started.js
import mongoose = require('mongoose')
import app from './app'
import config from './config/index'

process.on('uncaughtException', err => {
  console.log('Uncaught exception is detction ......', err)
  process.exit(1)
})

async function main() {
  // server close

  try {
    await mongoose.connect(config.SERVER_URL as string)
    console.log('database connected')
    app.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
