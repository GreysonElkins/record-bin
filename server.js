const express = require('express')

const server = express()

server.set('port', process.env.PORT || 4200)
server.locals.records = []
apps.locals.title = 'The Record Bin'

server.get('/', (request, response) => {
  response.send(apps.locals.records)
})

server.listen(server.get('port'), () => {
  console.log(`Greyson's server, ${apps.locals.title}, 
    is running on http://localhost:${server.get('port')}, 
    and it's pretty much the greatest thing ever.`
  )
})