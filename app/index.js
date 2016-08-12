const port = process.env.PORT || 8000
const express = require('express')
const server = express()

server.use(express.static(`${__dirname}/client`))
server.get('/', (res, req) => res.sendFile(`${__dirname}/client/index.html`))

server.listen(port, () => console.log(
  `👟  Server running in ${server.get('env')} mode\n` +
  `👂  Listening on port ${port}`
  )
)