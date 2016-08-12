const chokidarSocketEmitter = require('chokidar-socket-emitter')
const express = require('express')
const http = require('http')

const server = express()
const port = process.env.PORT || 8000

server.use(express.static(`${__dirname}/client`))
server.get('/', (res, req) => res.sendFile(`${__dirname}/client/index.html`))

if (server.get('env') === 'development') chokidarSocketEmitter({app: http.createServer(server)})

server.listen(port, () => console.log(
  `👟  Server running in ${server.get('env')} mode\n` +
  `👂  Listening on port ${port}`
  )
)
