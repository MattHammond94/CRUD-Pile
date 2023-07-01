const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'Get all visitors' })
})

router.post('/', (req, res) => {
  res.json({ message: 'Add a new visitor' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a previous visitor' })
})

router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a visitors info' })
})

module.exports = router