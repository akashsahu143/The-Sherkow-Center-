import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  patientName: {
    type: String,
    required: true
  },
  parentName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true,
    enum: [
      'Initial Consultation',
      'ABA Therapy Assessment',
      'Speech Therapy Evaluation',
      'Occupational Therapy Evaluation',
      'Diagnostic Assessment',
      'Follow-up Visit',
      'Family Support Session'
    ]
  },
  preferredDate: {
    type: Date,
    required: true
  },
  preferredTime: {
    type: String,
    required: true
  },
  childAge: {
    type: Number,
    required: true
  },
  insurance: String,
  concerns: String,
  newPatient: {
    type: String,
    enum: ['new', 'returning'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled', 'no-show'],
    default: 'pending'
  },
  notes: String,
  reminderSent: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Index for searching
appointmentSchema.index({ preferredDate: 1, status: 1 })
appointmentSchema.index({ patientId: 1 })

export default mongoose.model('Appointment', appointmentSchema)

