const express = require('express')

const app = express()

app.set('port', process.env.PORT || 4200)
app.locals.records = []
app.locals.title = 'The Record Bin'

app.get('/', (request, response) => {
  response.send(apps.locals.records)
})

app.listen(app.get('port'), () => {
  console.log(`Greyson's app, ${app.locals.title}, 
    is running on http://localhost:${app.get('port')}, 
    and it's pretty much the greatest thing ever.`
  )
})