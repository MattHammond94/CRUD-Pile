require('dotenv').config()

const express = require('express')

const CRUDapp = express()

CRUDapp.get('/', (req, res) => {
  res.json({ message: 'Welcome to the terrordome' })
})

CRUDapp.post('/', (req, res) => {
  res.json({ message: 'This is a post request' })
})

CRUDapp.delete('/', (req, res) => {
  res.json({ message: 'This is a delete request' })
})

CRUDapp.patch('/', (req, res) => {
  res.json({ message: 'This is a update request' })
})

CRUDapp.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})
