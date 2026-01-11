import express from 'express'
import { body, validationResult } from 'express-validator'
import Message from '../models/Message.js'

const router = express.Router()

// Get all messages (admin)
router.get('/', async (req, res) => {
  try {
    const { status, department } = req.query
    let query = {}
    
    if (status) query.status = status
    if (department) query.department = department

    const messages = await Message.find(query)
      .sort({ createdAt: -1 })
    res.json({ success: true, data: messages })
  } catch (error) {
    console.error('Get messages error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Create new message
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() })
    }

    const message = new Message(req.body)
    await message.save()

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: message
    })
  } catch (error) {
    console.error('Create message error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Update message status (admin)
router.patch('/:id', async (req, res) => {
  try {
    const { status, adminNotes } = req.body
    const updateData = { status }
    
    if (adminNotes) updateData.adminNotes = adminNotes
    if (status === 'replied') updateData.repliedAt = new Date()

    const message = await Message.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )

    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' })
    }

    res.json({ success: true, data: message })
  } catch (error) {
    console.error('Update message error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Get message stats
router.get('/stats', async (req, res) => {
  try {
    const byStatus = await Message.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ])

    const byDepartment = await Message.aggregate([
      { $group: { _id: '$department', count: { $sum: 1 } } }
    ])

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayCount = await Message.countDocuments({
      createdAt: { $gte: today }
    })

    res.json({
      success: true,
      data: {
        byStatus,
        byDepartment,
        todayCount
      }
    })
  } catch (error) {
    console.error('Get message stats error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router

