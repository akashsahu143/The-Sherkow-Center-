import { motion } from 'framer-motion'
import { Heart, Gift, Users, Star, CreditCard, CheckCircle, ArrowRight } from 'lucide-react'

function Donate() {
  const donationTiers = [
    {
      name: 'Champion',
      amount: '$5,000',
      description: 'Transform lives with transformative generosity',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
      benefits: [
        'Naming opportunity for a therapy room',
        'Annual recognition dinner',
        'VIP facility tour',
        'Quarterly impact reports',
        'Logo on donor wall',
      ],
      popular: false,
    },
    {
      name: 'Benefactor',
      amount: '$1,000',
      description: 'Make a significant impact on our mission',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      benefits: [
        'Direct impact on therapy programs',
        'Recognition on donor wall',
        'Quarterly impact reports',
        'Invitations to special events',
      ],
      popular: true,
    },
    {
      name: 'Supporter',
      amount: '$500',
      description: 'Help fund critical research and care',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
      benefits: [
        'Support therapy sessions',
        'Recognition on website',
        'Annual impact report',
        'Thank you certificate',
      ],
      popular: false,
    },
    {
      name: 'Friend',
      amount: '$100',
      description: 'Contribute to family support programs',
      color: 'bg-gradient-to-br from-orange-500 to-orange-700',
      benefits: [
        'Support family resources',
        'Recognition on website',
        'Impact story updates',
      ],
      popular: false,
    },
  ]

  const impactStories = [
    {
      title: 'Emma\'s Journey',
      description: 'With donor support, Emma received intensive ABA therapy and is now thriving in mainstream school.',
      raised: '$12,500',
      icon: '🌟',
    },
    {
      title: 'The Martinez Family',
      description: 'Family support programs helped the Martinez family navigate their son\'s diagnosis with confidence.',
      raised: '$8,200',
      icon: '👨‍👩‍👧',
    },
    {
      title: 'Research Breakthrough',
      description: 'Your donations funded research that led to a new, more effective intervention method.',
      raised: '$25,000',
      icon: '🔬',
    },
  ]

  const fundOptions = [
    { name: 'General Fund', description: 'Support our most critical needs' },
    { name: 'Scholarship Fund', description: 'Provide care for families in need' },
    { name: 'Research Fund', description: 'Advance ASD treatment knowledge' },
    { name: 'Family Support Fund', description: 'Help families access resources' },
    { name: 'Equipment Fund', description: 'Upgrade therapy tools and technology' },
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
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Make a Difference
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Donate to Autism Care Center
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your generosity helps us provide life-changing treatment for children with Autism 
              Spectrum Disorder and support for their families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '$1.2M', label: 'Raised Last Year' },
              { number: '500+', label: 'Children Helped' },
              { number: '200+', label: 'Families Supported' },
              { number: '98%', label: 'Goes to Programs' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Choose Your Impact</h2>
            <p className="section-subtitle">
              Select a donation level that works for you. Every contribution makes a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative card overflow-visible ${tier.popular ? 'ring-4 ring-primary-400' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`${tier.color} p-6 text-white text-center`}>
                  <Star className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-xl font-heading font-bold">{tier.name}</h3>
                  <div className="text-4xl font-bold mt-2">{tier.amount}</div>
                  <p className="text-white/80 text-sm mt-2">{tier.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full btn ${tier.popular ? 'btn-primary' : 'btn-outline'}`}>
                    Donate {tier.amount}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Amount */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 shadow-xl"
          >
            <h3 className="text-2xl font-heading font-bold text-gray-900 text-center mb-6">
              Custom Donation Amount
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {['$25', '$50', '$100', '$250', '$500'].map((amount) => (
                <button
                  key={amount}
                  className="px-6 py-3 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:border-primary-500 hover:text-primary-600 transition-colors"
                >
                  {amount}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mb-6">
              <input
                type="number"
                placeholder="Enter custom amount"
                className="input-field flex-1"
              />
              <select className="input-field w-40">
                <option>One-time</option>
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
            </div>
            
            <h4 className="font-semibold text-gray-900 mb-3">Direct my donation to:</h4>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {fundOptions.map((fund) => (
                <label key={fund.name} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-primary-300 transition-colors">
                  <input type="radio" name="fund" className="mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">{fund.name}</div>
                    <div className="text-xs text-gray-500">{fund.description}</div>
                  </div>
                </label>
              ))}
            </div>

            <button className="btn btn-primary w-full justify-center py-4">
              <Heart className="w-5 h-5 mr-2" />
              Complete Donation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Your Impact in Action</h2>
            <p className="section-subtitle">
              See how your donations are changing lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 card-hover"
              >
                <div className="text-5xl mb-4">{story.icon}</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Raised: {story.raised}</span>
                  <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Other Ways to Give</h2>
            <p className="section-subtitle">
              There are many ways to support our mission
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: 'Planned Giving',
                description: 'Include us in your estate planning with a bequest or trust.',
              },
              {
                icon: Users,
                title: 'Corporate Giving',
                description: 'Match employee donations or sponsor our programs.',
              },
              {
                icon: CreditCard,
                title: 'Stock Donations',
                description: 'Donate appreciated securities for tax benefits.',
              },
            ].map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <way.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{way.title}</h3>
                <p className="text-gray-600">{way.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">Recognition & Transparency</h2>
            <p className="text-gray-400">We value your trust and are committed to transparency</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
              <div className="text-gray-400">of donations go directly to programs</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2">4-Star</div>
              <div className="text-gray-400">Charity Navigator rating</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-400 mb-2">501(c)(3)</div>
              <div className="text-gray-400">Nonprofit organization</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Thank You for Your Generosity
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Together, we can help children with autism reach their full potential. 
              Your support makes all the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 shadow-xl">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </button>
              <a href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us for Other Ways to Give
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Donate

