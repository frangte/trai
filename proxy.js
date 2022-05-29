const cors = require('cors')
const request = require('request')
const express = require('express')
const app = express()

app.use(
  cors({
    origin: '*',
  }),
)

app.get('*', async (req, res) => {
  const url = `https://iboard.ssi.com.vn/dchart/api${req.originalUrl}`
  const options = { url }
  request(options, (error, response, body) => {
    res.send(body)
  })
})

app.listen(9999, async () => {
  console.log(`Proxy app listening at PORT: ${9999}`)
})
