const express = require('express')

const recipesRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = server
