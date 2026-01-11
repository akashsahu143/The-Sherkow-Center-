import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  preferredContact: {
    type: String,
    enum: ['email', 'phone', 'text'],
    default: 'email'
  },
  department: {
    type: String,
    enum: ['general', 'appointments', 'billing', 'research', 'donations', 'other'],
    default: 'general'
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new'
  },
  adminNotes: String,
  repliedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

messageSchema.index({ status: 1 })
messageSchema.index({ createdAt: -1 })

export default mongoose.model('Message', messageSchema)

