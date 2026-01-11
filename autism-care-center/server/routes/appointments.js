import express from 'express'
import { body, validationResult } from 'express-validator'
import Appointment from '../models/Appointment.js'

const router = express.Router()

// Get all appointments for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.userId })
      .sort({ preferredDate: 1 })
    res.json({ success: true, data: appointments })
  } catch (error) {
    console.error('Get appointments error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Get all appointments (admin)
router.get('/', async (req, res) => {
  try {
    const { status, date } = req.query
    let query = {}
    
    if (status) query.status = status
    if (date) {
      const startDate = new Date(date)
      startDate.setHours(0, 0, 0, 0)
      const endDate = new Date(date)
      endDate.setHours(23, 59, 59, 999)
      query.preferredDate = { $gte: startDate, $lte: endDate }
    }

    const appointments = await Appointment.find(query)
      .sort({ preferredDate: 1 })
    res.json({ success: true, data: appointments })
  } catch (error) {
    console.error('Get appointments error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Create new appointment
router.post('/', [
  body('patientName').trim().notEmpty().withMessage('Patient name is required'),
  body('parentName').trim().notEmpty().withMessage('Parent name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('service').trim().notEmpty().withMessage('Service is required'),
  body('preferredDate').isISO8601().withMessage('Valid date is required'),
  body('preferredTime').trim().notEmpty().withMessage('Preferred time is required'),
  body('childAge').isInt({ min: 1, max: 21 }).withMessage('Child age must be between 1 and 21'),
  body('newPatient').isIn(['new', 'returning']).withMessage('New/returning status is required')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() })
    }

    const appointment = new Appointment(req.body)
    await appointment.save()

    res.status(201).json({
      success: true,
      message: 'Appointment request submitted successfully',
      data: appointment
    })
  } catch (error) {
    console.error('Create appointment error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Update appointment status
router.patch('/:id', async (req, res) => {
  try {
    const { status, notes } = req.body
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status, notes, updatedAt: new Date() },
      { new: true }
    )

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' })
    }

    res.json({ success: true, data: appointment })
  } catch (error) {
    console.error('Update appointment error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Cancel appointment
router.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    )

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' })
    }

    res.json({ success: true, message: 'Appointment cancelled' })
  } catch (error) {
    console.error('Cancel appointment error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Get appointment stats
router.get('/stats/summary', async (req, res) => {
  try {
    const stats = await Appointment.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ])

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayAppointments = await Appointment.countDocuments({
      preferredDate: { $gte: today }
    })

    res.json({
      success: true,
      data: {
        byStatus: stats,
        todayCount: todayAppointments
      }
    })
  } catch (error) {
    console.error('Get stats error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router

