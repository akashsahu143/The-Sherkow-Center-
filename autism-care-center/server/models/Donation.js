import mongoose from 'mongoose'

const donationSchema = new mongoose.Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  donationType: {
    type: String,
    enum: ['one-time', 'monthly', 'quarterly', 'annual'],
    default: 'one-time'
  },
  fund: {
    type: String,
    enum: ['general', 'scholarship', 'research', 'family-support', 'equipment'],
    default: 'general'
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'debit_card', 'bank_transfer', 'check', 'other'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  stripePaymentIntentId: String,
  anonymous: {
    type: Boolean,
    default: false
  },
  mentionInDonorList: {
    type: Boolean,
    default: true
  },
  comments: String,
  receiptSent: {
    type: Boolean,
    default: false
  },
  taxDeductible: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Index for reporting
donationSchema.index({ createdAt: -1 })
donationSchema.index({ paymentStatus: 1 })

// Virtual for full name
donationSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`
})

// Virtual for formatted amount
donationSchema.virtual('formattedAmount').get(function() {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: this.currency
  }).format(this.amount)
})

export default mongoose.model('Donation', donationSchema)

