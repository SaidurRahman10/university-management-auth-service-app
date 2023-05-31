import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`DB is Connected Successfully :)`)
    app.listen(config.port, () => {
      console.log(`Sabbir Your Server is on this port :  ${config.port}`)
    })

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
    console.log('Faield to connect DB', error)
  }
}
bootstrap()
