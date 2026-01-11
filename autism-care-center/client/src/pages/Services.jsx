import { motion } from 'framer-motion'
import { Heart, Shield, Users, Award, BookOpen, CheckCircle } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Applied Behavior Analysis (ABA) Therapy',
      description: 'ABA therapy is the gold standard treatment for Autism Spectrum Disorder. Our certified behavior analysts work one-on-one with each child to develop essential skills in communication, social interaction, adaptive behaviors, and learning.',
      features: ['Individualized treatment plans', 'Skill building sessions', 'Progress tracking', 'Parent training'],
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Shield,
      title: 'Behavioral Therapy',
      description: 'Our behavioral therapy programs address challenging behaviors and teach alternative, positive behaviors. We use evidence-based strategies to help children develop self-regulation and coping skills.',
      features: ['Behavior assessment', 'Positive reinforcement', 'Crisis prevention', 'Skill generalization'],
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Users,
      title: 'Speech & Language Therapy',
      description: 'Our speech-language pathologists help children improve their communication skills, from verbal language to alternative communication methods. We address receptive and expressive language, pragmatics, and social communication.',
      features: ['Articulation therapy', 'Language development', 'Social communication', 'AAC evaluation'],
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Award,
      title: 'Occupational Therapy',
      description: 'Occupational therapy helps children develop the skills needed for daily living, fine motor skills, sensory processing, and independence in self-care activities.',
      features: ['Sensory integration', 'Fine motor skills', 'Daily living skills', 'Environmental adaptations'],
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Diagnostic Assessments',
      description: 'Comprehensive diagnostic evaluations using gold-standard tools to assess for Autism Spectrum Disorder and other developmental conditions. We provide detailed reports and recommendations.',
      features: ['ADOS-2 assessment', 'Developmental history', 'Cognitive evaluation', 'Comprehensive reports'],
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Heart,
      title: 'Family Support Services',
      description: 'We believe families are essential partners in treatment. Our family support services include parent training, counseling, support groups, and resource navigation.',
      features: ['Parent training workshops', 'Family counseling', 'Support groups', 'Resource coordination'],
      color: 'bg-teal-100 text-teal-600',
    },
  ]

  const process = [
    { step: '1', title: 'Initial Consultation', description: 'We start with a free consultation to understand your child\'s needs and answer your questions.' },
    { step: '2', title: 'Comprehensive Evaluation', description: 'Our team conducts thorough assessments to develop a complete picture of your child\'s strengths and needs.' },
    { step: '3', title: 'Personalized Treatment Plan', description: 'We create an individualized treatment plan tailored to your child\'s specific goals and learning style.' },
    { step: '4', title: 'Ongoing Therapy', description: 'Your child begins therapy with regular sessions and continuous progress monitoring.' },
    { step: '5', title: 'Family Partnership', description: 'We work closely with your family throughout the journey, providing training and support.' },
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive, evidence-based therapies and services designed to help children 
              with Autism Spectrum Disorder thrive and reach their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 rounded-3xl p-8 h-full min-h-[300px] flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <service.icon className="w-24 h-24 mx-auto mb-4 opacity-20" />
                      <span className="text-lg font-medium">Service Illustration</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              We follow a systematic approach to ensure each child receives the best possible care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-heading font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Insurance & Payment</h2>
              <p className="text-gray-600 mb-6 text-lg">
                We believe that cost should not be a barrier to receiving quality care. Our team works 
                with most major insurance providers and offers various payment options.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Most Insurance Accepted</div>
                    <div className="text-gray-600 text-sm">Including Aetna, Blue Cross, UnitedHealthcare, and more</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">In-Network Providers</div>
                    <div className="text-gray-600 text-sm">We work directly with insurance companies</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Flexible Payment Plans</div>
                    <div className="text-gray-600 text-sm">Financial assistance available for qualifying families</div>
                  </div>
                </div>
              </div>

              <a href="/contact" className="btn btn-primary">
                Verify Your Insurance
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-3xl p-8"
            >
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl">
                  <div className="font-semibold text-gray-900 mb-1">How long is each session?</div>
                  <div className="text-gray-600 text-sm">Session lengths vary by service, typically 1-2 hours for therapy sessions.</div>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <div className="font-semibold text-gray-900 mb-1">How often will my child need therapy?</div>
                  <div className="text-gray-600 text-sm">Frequency is based on individual needs, ranging from a few hours to 40 hours per week.</div>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <div className="font-semibold text-gray-900 mb-1">Do you offer virtual sessions?</div>
                  <div className="text-gray-600 text-sm">Yes, telehealth options are available for certain services.</div>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <div className="font-semibold text-gray-900 mb-1">Can parents observe sessions?</div>
                  <div className="text-gray-600 text-sm">Absolutely! We encourage parent involvement and observation.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to schedule a free consultation and learn how we can help your child thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/appointments" className="btn bg-white text-primary-600 hover:bg-gray-100 shadow-xl">
                Schedule Consultation
              </a>
              <a href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

