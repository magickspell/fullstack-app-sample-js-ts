import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import path from 'path'

const cfg = config() // config from ".env" file
const APP_PORT = cfg.parsed!.APP_PORT

const app = express()

app.use(cors()) // cors for browsers
app.use(express.json()) // parse body json
app.use(express.static(path.resolve('.', 'static'))) // share static

// example how to work with queries
app.get('/hello', (req, res) => {
  try {
    return res.status(200).json({
      message: 'hello',
      data: null,
      error: null
    })
  } catch (e) {
    return res.status(400).json({
      message: null,
      data: null,
      error: `error: ${e}`
    })
  }
})

const start = async () => {
  try {
    app.listen(APP_PORT, () => {
      console.log(`[ok] app start on port: ${APP_PORT}`)
    })
  } catch (e) {
    console.log(`[err] app cannot start. error: ${e}`)
  }
}
start()