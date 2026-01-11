import express from 'express'
import ResearchStudy from '../models/ResearchStudy.js'

const router = express.Router()

// Get all studies
router.get('/', async (req, res) => {
  try {
    const { status, category } = req.query
    let query = { isActive: true }
    
    if (status) query.status = status
    if (category) query.category = category

    const studies = await ResearchStudy.find(query)
      .sort({ createdAt: -1 })
    res.json({ success: true, data: studies })
  } catch (error) {
    console.error('Get studies error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Get study by ID
router.get('/:id', async (req, res) => {
  try {
    const study = await ResearchStudy.findById(req.params.id)
    
    if (!study) {
      return res.status(404).json({ success: false, message: 'Study not found' })
    }

    res.json({ success: true, data: study })
  } catch (error) {
    console.error('Get study error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Create study (admin)
router.post('/', async (req, res) => {
  try {
    const study = new ResearchStudy(req.body)
    await study.save()

    res.status(201).json({
      success: true,
      message: 'Study created successfully',
      data: study
    })
  } catch (error) {
    console.error('Create study error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Update study (admin)
router.patch('/:id', async (req, res) => {
  try {
    const study = await ResearchStudy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!study) {
      return res.status(404).json({ success: false, message: 'Study not found' })
    }

    res.json({ success: true, data: study })
  } catch (error) {
    console.error('Update study error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Register interest in study
router.post('/:id/register', async (req, res) => {
  try {
    const { name, email, phone, childAge } = req.body
    const study = await ResearchStudy.findById(req.params.id)
    
    if (!study) {
      return res.status(404).json({ success: false, message: 'Study not found' })
    }

    // Here you would save the registration to a separate collection
    // For now, we'll just return success
    res.json({
      success: true,
      message: 'Registration submitted. Our research team will contact you soon.'
    })
  } catch (error) {
    console.error('Register interest error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// Get research stats
router.get('/stats/summary', async (req, res) => {
  try {
    const totalStudies = await ResearchStudy.countDocuments({ isActive: true })
    const recruitingStudies = await ResearchStudy.countDocuments({ 
      isActive: true, 
      status: 'recruiting' 
    })
    const participatingFamilies = await ResearchStudy.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: null, total: { $sum: '$participatingFamilies' } } }
    ])

    res.json({
      success: true,
      data: {
        totalStudies,
        recruitingStudies,
        participatingFamilies: participatingFamilies[0]?.total || 0
      }
    })
  } catch (error) {
    console.error('Get research stats error:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router

