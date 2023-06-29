const express = require('express')

const CRUDapp = express()

CRUDapp.listen(420, () => {
  console.log('Listening on port 420')
})