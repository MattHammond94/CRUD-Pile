require('dotenv').config()

const express = require('express')
const visitorRoutes = require('./routes/crudRouter')

const CRUDapp = express()

CRUDapp.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

CRUDapp.use('/homepage', visitorRoutes)

CRUDapp.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})
