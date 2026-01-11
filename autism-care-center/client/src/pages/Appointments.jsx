import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ChevronRight } from 'lucide-react'
import toast from 'react-hot-toast'

function Appointments() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    preferredDate: '',
    preferredTime: '',
    patientName: '',
    parentName: '',
    phone: '',
    email: '',
    childAge: '',
    insurance: '',
    concerns: '',
    newPatient: '',
  })

  const services = [
    'Initial Consultation',
    'ABA Therapy Assessment',
    'Speech Therapy Evaluation',
    'Occupational Therapy Evaluation',
    'Diagnostic Assessment',
    'Follow-up Visit',
    'Family Support Session',
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send data to backend
    console.log('Appointment submitted:', formData)
    toast.success('Appointment request submitted successfully! We will contact you shortly.')
    setStep(4)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Calendar className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Schedule an Appointment
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Take the first step towards helping your child thrive. Schedule a consultation 
              with our expert team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {['Service & Time', 'Patient Info', 'Confirmation'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step > index + 1 ? 'bg-green-500 text-white' :
                  step === index + 1 ? 'bg-primary-600 text-white' :
                  'bg-gray-200 text-gray-500'
                }`}>
                  {step > index + 1 ? <CheckCircle className="w-6 h-6" /> : index + 1}
                </div>
                <span className={`ml-2 hidden sm:block ${step === index + 1 ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
                  {label}
                </span>
                {index < 2 && (
                  <div className={`w-12 md:w-24 h-1 mx-2 ${step > index + 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8 shadow-lg"
          >
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Select Service & Preferred Time
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      <span className="text-red-500 mr-1">*</span>
                      Service Type
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      <span className="text-red-500 mr-1">*</span>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="input-field"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      <span className="text-red-500 mr-1">*</span>
                      Preferred Time
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: time })}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                            formData.preferredTime === time
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      <span className="text-red-500 mr-1">*</span>
                      New or Returning Patient?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, newPatient: 'new' })}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          formData.newPatient === 'new'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <User className="w-6 h-6 mx-auto mb-2" />
                        <div className="font-medium">New Patient</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, newPatient: 'returning' })}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          formData.newPatient === 'returning'
                            ? 'border-primary-600 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <User className="w-6 h-6 mx-auto mb-2" />
                        <div className="font-medium">Returning Patient</div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!formData.service || !formData.preferredDate || !formData.preferredTime || !formData.newPatient}
                  >
                    Continue
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Patient Information
                </h2>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Patient Name (Child)
                      </label>
                      <input
                        type="text"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Parent/Guardian Name
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        <span className="text-red-500 mr-1">*</span>
                        Child's Age
                      </label>
                      <input
                        type="number"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Years old"
                        min="1"
                        max="21"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">
                        Insurance Provider
                      </label>
                      <select
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleInputChange}
                        className="input-field"
                      >
                        <option value="">Select insurance...</option>
                        <option value="aetna">Aetna</option>
                        <option value="bluecross">Blue Cross Blue Shield</option>
                        <option value="cigna">Cigna</option>
                        <option value="united">UnitedHealthcare</option>
                        <option value="humana">Humana</option>
                        <option value="medicaid">Medicaid</option>
                        <option value="self">Self-Pay</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Concerns or Notes (Optional)
                    </label>
                    <textarea
                      name="concerns"
                      value={formData.concerns}
                      onChange={handleInputChange}
                      className="input-field h-32 resize-none"
                      placeholder="Please describe any specific concerns or information we should know..."
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Confirm Your Appointment
                </h2>
                {/* Summary would go here */}
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Appointment Request Submitted!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for scheduling with Autism Care Center. Our team will review your request 
                  and contact you within 24-48 hours to confirm your appointment.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Confirmation email sent to {formData.email}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Our team will call to confirm details
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Receive appointment confirmation
                    </li>
                  </ul>
                </div>
                <a href="/" className="btn btn-primary">
                  Return to Homepage
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '(555) 123-4567',
                subcontent: 'Mon-Fri: 8am-6pm',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'appointments@autismcarecenter.com',
                subcontent: 'We respond within 24 hours',
              },
              {
                icon: Calendar,
                title: 'Location',
                content: '123 Medical Center Drive',
                subcontent: 'Suite 100, City, State 12345',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 font-medium">{item.content}</p>
                <p className="text-gray-500 text-sm">{item.subcontent}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointments

