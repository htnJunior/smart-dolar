require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const server = express()

server.use(cors())

server.use('/api', routes)

server.get('/', (req, res) => {
  res.send('Welcome to my App.')
})

const PORT = process.env.PORT || 3003

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
