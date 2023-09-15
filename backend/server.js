require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const visitorRoutes = require('./routes/crudRouter');
const CRUDapp = express();
const logger = require("morgan");

CRUDapp.use(express.json());

CRUDapp.use(logger("dev"));

CRUDapp.use('/homepage', visitorRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    CRUDapp.listen(process.env.PORT, () => {
      console.log('Connected to DB and Listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

