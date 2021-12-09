const express = require('express')

const server = express()

server.use(express.json())

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = server
