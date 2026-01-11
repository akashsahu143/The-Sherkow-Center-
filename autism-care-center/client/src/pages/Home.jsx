import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Shield, Users, Award, Phone, Calendar, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Home() {
  const stats = [
    { number: '500+', label: 'Children Helped' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Staff' },
    { number: '98%', label: 'Parent Satisfaction' },
  ]

  const services = [
    {
      icon: Heart,
      title: 'ABA Therapy',
      description: 'Applied Behavior Analysis therapy tailored to each child\'s unique needs and goals.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Shield,
      title: 'Behavioral Therapy',
      description: 'Comprehensive behavioral interventions to promote positive development.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Users,
      title: 'Family Support',
      description: 'Supporting families with resources, training, and emotional support.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Award,
      title: 'Speech Therapy',
      description: 'Helping children develop communication skills and social interaction abilities.',
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  const features = [
    {
      title: 'Individualized Treatment Plans',
      description: 'Every child receives a customized care plan based on their specific needs, strengths, and goals.',
      icon: '🎯',
    },
    {
      title: 'Evidence-Based Practices',
      description: 'We use only scientifically proven methods and stay current with the latest research.',
      icon: '📚',
    },
    {
      title: 'Parent Involvement',
      description: 'Families are actively involved in every step of their child\'s treatment journey.',
      icon: '👨‍👩‍👧',
    },
    {
      title: 'Safe & Nurturing Environment',
      description: 'Our centers are designed to be welcoming, safe, and conducive to learning.',
      icon: '🏠',
    },
  ]

  const testimonials = [
    {
      quote: "The Autism Care Center changed our lives. Our daughter has made incredible progress in just one year.",
      author: "Sarah M.",
      role: "Parent",
    },
    {
      quote: "The staff here genuinely cares about each child. They treat our son like family.",
      author: "Michael R.",
      role: "Parent",
    },
    {
      quote: "We're so grateful for the guidance and support we've received. Highly recommend!",
      author: "Jennifer K.",
      role: "Parent",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Now Accepting New Patients
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Helping Children with Autism Thrive & Reach Their Potential
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We provide comprehensive, evidence-based treatments for children and adolescents 
                with Autism Spectrum Disorder. Your child's journey to success starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointments" className="btn bg-white text-primary-600 hover:bg-gray-100 shadow-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </Link>
                <Link to="/services" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-white/20 rounded-2xl flex flex-col items-center justify-center text-white p-6">
                      <Heart className="w-12 h-12 mb-3" />
                      <span className="text-lg font-semibold">Compassionate Care</span>
                    </div>
                    <div className="bg-white/20 rounded-2xl flex flex-col items-center justify-center text-white p-6">
                      <Shield className="w-12 h-12 mb-3" />
                      <span className="text-lg font-semibold">Safe Environment</span>
                    </div>
                    <div className="bg-white/20 rounded-2xl flex flex-col items-center justify-center text-white p-6">
                      <Users className="w-12 h-12 mb-3" />
                      <span className="text-lg font-semibold">Expert Team</span>
                    </div>
                    <div className="bg-white/20 rounded-2xl flex flex-col items-center justify-center text-white p-6">
                      <Award className="w-12 h-12 mb-3" />
                      <span className="text-lg font-semibold">Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-1 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Comprehensive Services</h2>
            <p className="section-subtitle">
              We offer a wide range of evidence-based therapies and services designed to support 
              children with ASD and their families at every stage of their journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover p-6"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center group">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn btn-outline">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Why Families Choose Autism Care Center</h2>
              <p className="text-gray-600 mb-8 text-lg">
                With over 15 years of experience, we've helped hundreds of children with ASD 
                reach their full potential. Here's what sets us apart:
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-hero rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Schedule a free consultation to discuss your child's needs and how we can help.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>(555) 123-4567</span>
                  </div>
                  <Link to="/appointments" className="btn bg-white text-primary-600 hover:bg-gray-100 w-full justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-calm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What Families Say About Us</h2>
            <p className="section-subtitle">
              Real stories from real families whose lives have been touched by our care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-primary-500 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Together, We Can Make a Difference
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our community of families and professionals dedicated to helping 
              children with autism thrive. Your support helps us continue our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="btn bg-white text-primary-600 hover:bg-gray-100 shadow-xl">
                <Heart className="w-5 h-5 mr-2" />
                Make a Donation
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
                Pioneering Research
              </div>
              <h2 className="section-title">Leading the Way in ASD Research</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our center is at the forefront of autism research, conducting studies that 
                advance understanding and treatment of Autism Spectrum Disorder.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                  Ongoing clinical trials and studies
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                  Partnerships with leading universities
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                  Published research in peer-reviewed journals
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                  Family participation opportunities
                </li>
              </ul>
              <Link to="/research" className="btn btn-secondary">
                Explore Our Research
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-3xl p-8"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-heading font-bold text-xl text-gray-900 mb-4">
                  Current Research Studies
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <div className="font-semibold text-gray-900">Early Intervention Outcomes</div>
                    <div className="text-sm text-gray-500">Study on long-term outcomes of early ABA therapy</div>
                  </div>
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <div className="font-semibold text-gray-900">Social Skills Development</div>
                    <div className="text-sm text-gray-500">New approaches to social skill building</div>
                  </div>
                  <div className="border-l-4 border-accent-500 pl-4">
                    <div className="font-semibold text-gray-900">Family Support Programs</div>
                    <div className="text-sm text-gray-500">Impact of family involvement on progress</div>
                  </div>
                </div>
                <Link to="/research" className="text-primary-600 font-semibold mt-4 inline-block hover:text-primary-700">
                  View All Studies →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

