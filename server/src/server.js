require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const server = express()

server.use(cors())

server.use('/api', routes)

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})
