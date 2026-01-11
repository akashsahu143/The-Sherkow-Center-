import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, Mail, Calendar, FileText, MessageSquare, Bell, ChevronRight, LogIn } from 'lucide-react'
import toast from 'react-hot-toast'

function PatientPortal() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      toast.success('Welcome back! Logging you in...')
      // Would normally authenticate here
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match')
        return
      }
      toast.success('Account created successfully!')
      setIsLogin(true)
    }
  }

  const dashboardLinks = [
    { icon: Calendar, title: 'Upcoming Appointments', desc: 'View and manage appointments', color: 'bg-blue-100 text-blue-600' },
    { icon: FileText, title: 'Medical Records', desc: 'Access treatment records', color: 'bg-green-100 text-green-600' },
    { icon: MessageSquare, title: 'Messages', desc: 'Contact your care team', color: 'bg-purple-100 text-purple-600' },
    { icon: Bell, title: 'Notifications', desc: 'View updates and reminders', color: 'bg-orange-100 text-orange-600' },
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
            <User className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Patient Portal
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Access your child's records, schedule appointments, and communicate with 
              your care team - all in one secure place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login/Register Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8 shadow-lg"
          >
            <div className="flex mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 font-medium transition-colors ${
                  isLogin ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500'
                }`}
              >
                <LogIn className="w-5 h-5 inline mr-2" />
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 font-medium transition-colors ${
                  !isLogin ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500'
                }`}
              >
                <User className="w-5 h-5 inline mr-2" />
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                {!isLogin && (
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input-field pl-10"
                        placeholder="Your full name"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field pl-10"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="input-field pl-10"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="input-field pl-10"
                        placeholder="••••••••"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-full mt-6">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              By continuing, you agree to our{' '}
              <a href="#" className="text-primary-600">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-primary-600">Privacy Policy</a>
            </p>
          </motion.div>

          {/* Demo Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-4 bg-blue-50 rounded-xl text-center"
          >
            <p className="text-sm text-blue-700">
              <strong>Demo Access:</strong> Use email: demo@autismcarecenter.com / password: demo123
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portal Features (shown when logged in - conceptual) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Portal Features</h2>
            <p className="section-subtitle">
              Everything you need to manage your child's care journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 card-hover cursor-pointer"
              >
                <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center mb-4`}>
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-1">{link.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{link.desc}</p>
                <span className="text-primary-600 text-sm font-medium flex items-center">
                  Access <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'HIPAA Compliant', desc: 'Full compliance with healthcare privacy regulations' },
              { title: '256-bit Encryption', desc: 'Bank-level security for all data' },
              { title: 'Secure Authentication', desc: 'Protected access with secure login' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Lock className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Need Help with the Portal?
          </h2>
          <p className="text-white/90 mb-6">
            Our technical support team is here to assist you with any portal issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Support
            </a>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
              View FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PatientPortal

