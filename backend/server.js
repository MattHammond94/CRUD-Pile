require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const visitorRoutes = require('./routes/crudRouter')
const CRUDapp = express()

CRUDapp.use(express.json())

CRUDapp.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

CRUDapp.use('/homepage', visitorRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    CRUDapp.listen(process.env.PORT, () => {
      console.log('Connected to DB and Listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

