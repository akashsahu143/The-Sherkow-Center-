import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import toast from 'react-hot-toast'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    toast.success('Message sent successfully! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'email',
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(555) 123-4567',
      subcontent: 'Mon-Fri: 8am-6pm, Sat: 9am-2pm',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@autismcarecenter.com',
      subcontent: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Medical Center Drive',
      subcontent: 'Suite 100, City, State 12345',
    },
  ]

  const departments = [
    { name: 'General Inquiries', email: 'info@autismcarecenter.com', phone: '(555) 123-4567' },
    { name: 'Appointments', email: 'appointments@autismcarecenter.com', phone: '(555) 123-4568' },
    { name: 'Billing', email: 'billing@autismcarecenter.com', phone: '(555) 123-4569' },
    { name: 'Research', email: 'research@autismcarecenter.com', phone: '(555) 123-4570' },
    { name: 'Donations', email: 'donate@autismcarecenter.com', phone: '(555) 123-4571' },
  ]

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
            <MessageSquare className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center shadow-lg"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.subcontent}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Department Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8 shadow-lg"
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      <span className="text-red-500 mr-1">*</span>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Full name"
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

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      <span className="text-red-500 mr-1">*</span>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select a topic...</option>
                      <option value="general">General Inquiry</option>
                      <option value="appointments">Appointments</option>
                      <option value="services">Services Information</option>
                      <option value="billing">Billing Question</option>
                      <option value="research">Research Inquiry</option>
                      <option value="donations">Donations</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input-field h-32 resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    {['email', 'phone', 'text'].map((method) => (
                      <label key={method} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="capitalize">{method === 'text' ? 'Text' : method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-full justify-center py-4">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Department Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Department Contacts
              </h2>
              <div className="space-y-4 mb-8">
                {departments.map((dept) => (
                  <div key={dept.name} className="card p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{dept.name}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <a href={`mailto:${dept.email}`} className="text-primary-600 hover:text-primary-700">
                          {dept.email}
                        </a>
                        <span className="text-gray-400">|</span>
                        <span className="text-gray-600">{dept.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="card p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="font-heading font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h4 className="font-semibold text-red-700 mb-2">Emergency?</h4>
                <p className="text-red-600 text-sm">
                  If you are experiencing a medical emergency, please call 911 immediately. 
                  This form is not monitored for emergencies.
                </p>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-heading font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="section-title">Find Our Location</h2>
            <p className="section-subtitle">
              Conveniently located with easy access and parking
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center"
          >
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">123 Medical Center Drive, Suite 100</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
            {[
              { icon: '🅿️', title: 'Free Parking', desc: 'ample parking available' },
              { icon: '♿', title: 'Accessible', desc: 'wheelchair accessible' },
              { icon: '🚌', title: 'Public Transit', desc: 'bus stop nearby' },
            ].map((item, index) => (
              <div key={item.title} className="p-4">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

