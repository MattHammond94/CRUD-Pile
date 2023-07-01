const express = require('express')
const Visitor = require('../models/visitorModel')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Get all visitors' })
})

router.post('/', async (req, res) => {
  const {visitorName, age} = req.body

  try {
    const visitor = await Visitor.create({visitorName, age})
    res.status(200).json({ message: 'Visitor was successfully added to the DB'})
  } catch (error) { 
    res.status(400).json({ error: error.message })
  }
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a previous visitor' })
})

router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a visitors info' })
})

module.exports = router