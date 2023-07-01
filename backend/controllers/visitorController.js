const Visitor = require('../models/visitorModel')
const mongoose = require('mongoose')

const getVisitors = async (req, res) => {
  const visitors = await Visitor.find({}).sort({createdAt: -1})
  res.status(200).json(visitors)
}

const createVisitor = async (req, res) => {
  const {visitorName, age} = req.body

  try {
    const visitor = await Visitor.create({visitorName, age})
    res.status(200).json({ message: 'Visitor was successfully added to the DB' })
  } catch (error) { 
    res.status(400).json({ error: error.message })
  }
}

const updateVisitor = async (req, res) => {

  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'Id param is invalid'})
  }

  const visitor = await Visitor.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!visitor) {
    return res.status(404).json({error: 'Visitor does not exist'})
  }

  res.status(200).json(visitor)
}

const deleteVisitor = async (req, res) => {

  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'Id param is invalid'})
  }

  const visitor = await Visitor.findOneAndDelete({ _id: id })

  if (!visitor) {
    return res.status(404).json({error: 'Visitor does not exist'})
  }

  res.status(200).json(visitor)
}


module.exports = {
  getVisitors,
  createVisitor,
  updateVisitor,
  deleteVisitor
}
