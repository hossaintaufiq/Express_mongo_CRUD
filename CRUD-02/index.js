import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Web server is running correctly')
})

app.listen(3000)