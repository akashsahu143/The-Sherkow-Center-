import mongoose from 'mongoose'

const researchStudySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['recruiting', 'active', 'completed', 'paused'],
    default: 'recruiting'
  },
  category: {
    type: String,
    enum: ['treatment', 'behavior', 'communication', 'family-support', 'genetics', 'other']
  },
  principalInvestigator: {
    name: String,
    credentials: String,
    affiliation: String
  },
  coInvestigators: [{
    name: String,
    credentials: String
  }],
  targetParticipants: {
    number: Number,
    ageRange: {
      min: Number,
      max: Number
    },
    criteria: [String]
  },
  duration: String,
  participatingFamilies: {
    type: Number,
    default: 0
  },
  funding: {
    source: String,
    grantNumber: String
  },
  publications: [{
    title: String,
    journal: String,
    year: Number,
    url: String
  }],
  contactEmail: String,
  isActive: {
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

researchStudySchema.index({ status: 1 })
researchStudySchema.index({ category: 1 })

export default mongoose.model('ResearchStudy', researchStudySchema)

