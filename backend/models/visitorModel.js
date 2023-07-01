const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const visitorSchema = new Schema({
  visitorName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, { timestamps: true })


module.exports = mongoose.model('visitor', visitorSchema)