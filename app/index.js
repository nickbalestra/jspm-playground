const chokidarSocketEmitter = require('chokidar-socket-emitter')
const express = require('express')
const http = require('http')
const path = require('path')

const server = express()
const port = process.env.PORT || 8000

const env = server.get('env')
const publicDir = env === 'production' ? 'public' : 'client'
server.use(express.static(`${__dirname}/${publicDir}`))
server.get('/', (req, res) => res.sendFile(`${__dirname}/${publicDir}/index.html`))
if (env === 'development') chokidarSocketEmitter({app: http.createServer(server)})

server.listen(port, () => console.log(
  `👟  Server running in ${env} mode\n` +
  `👂  Listening on port ${port}`
  )
)
