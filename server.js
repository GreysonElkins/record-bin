const express = require('express')
import cors from 'cors'

import Record from './src/Record'
import recordBin from './src/recordBin'

const app = express()
app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 4200)
app.locals.records = recordBin
app.locals.title = 'The Record Bin'

app.get('/', (request, response) => {
  response.send('Oh you want a cool record to check out, huh?')
})

app.get('/api/v1/records', (request, response) => {
  response.status(200).json(app.locals.records)
})

app.get('/api/v1/records/:id', (request, response) => {
  const foundAlbum = app.locals.records.find(record => record.id === request.params.id)
  foundAlbum ? response.status(200).json(foundAlbum) : response.status(404)
})

const requestIsGood = (album) => {
  // console.log(album)
  const requestValues = Object.keys(album)
  const requiredValues = [
      'album', 
      'artist', 
      'runtime', 
      'releaseYear', 
      'genre', 
      'hitSingle', 
      'hitSingleLink', 
      'color', 
      'medium',
      'speed',
      'isGatefold',
      'diskCount'
    ]
  album.medium === "vinyl" && requiredValues.push('speed', 'isGatefold', 'diskCount')
  const missingValues = requiredValues.filter(value => !requestValues.includes(value))
  return missingValues.length > 0 ? false : true
}

const getId = (record) => {
    const id = record.releaseYear + record.album.split(" ")[0] + record.runtime
    record.id = id
  }

app.post('/api/v1/records', (request, response) => {
  const newRecord = request.body
  if (requestIsGood(newRecord)) {
    getId(newRecord)
    app.locals.records.push(newRecord)
    return response.status(201).json('the server accepts!')
  } else {
    return response.status(422).json(`Y'all need to check the data`)
  }
})

app.listen(app.get('port'), () => {
  console.log(`Greyson's app, ${app.locals.title}, 
    is running on http://localhost:${app.get('port')}, 
    and it's pretty much the greatest thing ever.`
  )
})