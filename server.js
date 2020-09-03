import express from 'express'
import recordBin from './src/recordBin'

const app = express()

app.set('port', process.env.PORT || 4200)
app.locals.records = recordBin
app.locals.title = 'The Record Bin'

app.get('/', (request, response) => {
  response.send('Oh you want a cool record to check out, huh?')
})

app.listen(app.get('port'), () => {
  console.log(`Greyson's app, ${app.locals.title}, 
    is running on http://localhost:${app.get('port')}, 
    and it's pretty much the greatest thing ever.`
  )
})