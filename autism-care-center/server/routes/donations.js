import express from 'express'
import { body, validationResult } from 'express-validator'
import Donation from '../models/Donation.js'

const router = express.Router()

// Get all donations (admin)
router.get('/', async (req, res) => {
  try {
    const { status, fund } = req.query
    let query = {}
    
    if (status) query.paymentStatus = status
    if (fund) query.fund = fund

    const donations = await Donation.find(query)
      .sort({ createdAt: -1 })
    res.json({ success: true, data: donations })
  } catch (error) {
    console.error('Get donations error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Create donation
router.post('/', [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('amount').isFloat({ min: 1 }).withMessage('Amount must be at least $1'),
  body('paymentMethod').notEmpty().withMessage('Payment method is required')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() })
    }

    const donation = new Donation(req.body)
    await donation.save()

    res.status(201).json({
      success: true,
      message: 'Donation recorded successfully',
      data: donation
    })
  } catch (error) {
    console.error('Create donation error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Get donation stats
router.get('/stats', async (req, res) => {
  try {
    const totalDonations = await Donation.aggregate([
      { $match: { paymentStatus: 'completed' } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      }
    ])

    const byFund = await Donation.aggregate([
      { $match: { paymentStatus: 'completed' } },
      {
        $group: {
          _id: '$fund',
          amount: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      }
    ])

    const byMonth = await Donation.aggregate([
      { $match: { paymentStatus: 'completed' } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } },
          amount: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: -1 } },
      { $limit: 12 }
    ])

    res.json({
      success: true,
      data: {
        total: totalDonations[0] || { totalAmount: 0, count: 0 },
        byFund,
        byMonth
      }
    })
  } catch (error) {
    console.error('Get donation stats error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Update payment status (for Stripe webhook)
router.patch('/:id/payment-status', async (req, res) => {
  try {
    const { paymentStatus, stripePaymentIntentId } = req.body
    
    const updateData = { paymentStatus }
    if (stripePaymentIntentId) {
      updateData.stripePaymentIntentId = stripePaymentIntentId
    }

    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )

    if (!donation) {
      return res.status(404).json({ success: false, message: 'Donation not found' })
    }

    res.json({ success: true, data: donation })
  } catch (error) {
    console.error('Update payment status error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Send receipt
router.post('/:id/send-receipt', async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id)
    
    if (!donation) {
      return res.status(404).json({ success: false, message: 'Donation not found' })
    }

    // Here you would send an email receipt
    donation.receiptSent = true
    await donation.save()

    res.json({ success: true, message: 'Receipt sent successfully' })
  } catch (error) {
    console.error('Send receipt error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router

