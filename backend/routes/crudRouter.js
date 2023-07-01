const express = require('express')
const {
  getVisitors,
  createVisitor,
  updateVisitor,
  deleteVisitor
} = require('../controllers/visitorController')

const router = express.Router()

router.get('/', getVisitors)
router.post('/', createVisitor)
router.patch('/:id', updateVisitor)
router.delete('/:id', deleteVisitor)

module.exports = router