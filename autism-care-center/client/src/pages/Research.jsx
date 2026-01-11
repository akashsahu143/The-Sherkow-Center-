import { motion } from 'framer-motion'
import { BookOpen, Users, FileText, ChevronRight, Calendar, Award, Search } from 'lucide-react'

function Research() {
  const currentStudies = [
    {
      title: 'Early Intervention Outcomes in ASD',
      description: 'A longitudinal study examining the long-term outcomes of early ABA therapy intervention in children diagnosed with Autism Spectrum Disorder.',
      status: 'Recruiting',
      participants: '150 families',
      duration: '5 years',
      icon: '🔬',
    },
    {
      title: 'Social Skills Development Program',
      description: 'Testing the effectiveness of a novel social skills intervention program using virtual reality technology.',
      status: 'Active',
      participants: '75 children',
      duration: '2 years',
      icon: '👥',
    },
    {
      title: 'Family Impact Study',
      description: 'Understanding the impact of family involvement on treatment outcomes and developing support program improvements.',
      status: 'Recruiting',
      participants: '200 families',
      duration: '3 years',
      icon: '👨‍👩‍👧',
    },
  ]

  const publications = [
    {
      title: 'Early ABA Therapy: Long-term Outcomes',
      authors: 'Johnson, S., Chen, M., Rodriguez, E.',
      journal: 'Journal of Autism Research',
      year: '2023',
      citations: '45',
    },
    {
      title: 'Virtual Reality in Social Skills Training',
      authors: 'Williams, J., Johnson, S.',
      journal: 'Developmental Neuroscience',
      year: '2023',
      citations: '32',
    },
    {
      title: 'Family Involvement in ASD Treatment',
      authors: 'Rodriguez, E., Chen, M.',
      journal: 'Autism: The International Journal',
      year: '2022',
      citations: '67',
    },
    {
      title: 'Sensory Integration Approaches',
      authors: 'Johnson, S., Williams, J.',
      journal: 'Occupational Therapy Journal',
      year: '2022',
      citations: '89',
    },
  ]

  const researchTeam = [
    { name: 'Dr. Sarah Johnson', role: 'Principal Investigator' },
    { name: 'Dr. Michael Chen', role: 'Co-Investigator' },
    { name: 'Dr. James Williams', role: 'Co-Investigator' },
    { name: 'Emily Rodriguez', role: 'Research Coordinator' },
    { name: 'Dr. Lisa Park', role: 'Data Analyst' },
    { name: 'Dr. Robert Kim', role: 'Statistical Consultant' },
  ]

  const news = [
    {
      title: 'New Grant Awarded for ASD Research',
      date: 'November 2024',
      excerpt: 'We are excited to announce a $2M grant from NIH to continue our early intervention research.',
    },
    {
      title: 'Research Conference Presentation',
      date: 'October 2024',
      excerpt: 'Our team presented findings at the International Society for Autism Research annual meeting.',
    },
    {
      title: 'New Partnership with University',
      date: 'September 2024',
      excerpt: 'Collaboration established with State University for advanced autism research.',
    },
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
              <BookOpen className="w-4 h-4 mr-2" />
              Pioneering Research
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Research & Innovation
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Leading the way in autism research to improve lives through evidence-based 
              discoveries and innovative treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="section-title">Our Research Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our research division is dedicated to advancing the understanding of Autism Spectrum 
              Disorder and developing more effective treatments. Through rigorous scientific inquiry 
              and collaboration with leading institutions, we strive to translate research findings 
              into practical applications that directly benefit the children and families we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Current Research Studies</h2>
            <p className="section-subtitle">
              Active clinical trials and research projects aimed at improving ASD treatment outcomes
            </p>
          </motion.div>

          <div className="grid gap-8">
            {currentStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="text-6xl">{study.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-heading font-bold text-gray-900">{study.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        study.status === 'Recruiting' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {study.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {study.participants}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {study.duration}
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex-shrink-0">
                    <button className="btn btn-primary w-full lg:w-auto">
                      {study.status === 'Recruiting' ? 'Participate' : 'Learn More'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Publications</h2>
            <p className="section-subtitle">
              Peer-reviewed research published in leading scientific journals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <FileText className="w-6 h-6 text-primary-600" />
                  <span className="text-sm text-gray-500">{pub.citations} citations</span>
                </div>
                <h4 className="font-heading font-bold text-gray-900 mb-2">{pub.title}</h4>
                <p className="text-primary-600 text-sm mb-1">{pub.authors}</p>
                <p className="text-gray-500 text-sm">
                  {pub.journal} • {pub.year}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button className="btn btn-outline">
              View All Publications
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Research Team</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our research team consists of dedicated professionals from diverse backgrounds 
                including psychology, behavioral science, neuroscience, and clinical practice.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                We collaborate with leading universities, hospitals, and research institutions 
                worldwide to advance our understanding of Autism Spectrum Disorder.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {researchTeam.map((member) => (
                  <div key={member.name} className="flex items-center p-3 bg-white rounded-lg">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-600 font-bold text-sm">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{member.name}</div>
                      <div className="text-gray-500 text-xs">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
                Research Highlights
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-accent-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">$2M+</div>
                    <div className="text-gray-600">Research grants secured</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">50+</div>
                    <div className="text-gray-600">Publications in peer-reviewed journals</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-secondary-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">500+</div>
                    <div className="text-gray-600">Families participated in research</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">15+</div>
                    <div className="text-gray-600">Active research partnerships</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Research News & Updates</h2>
            <p className="section-subtitle">
              Stay updated on the latest developments from our research division
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 card-hover"
              >
                <div className="text-sm text-primary-600 font-medium mb-2">{item.date}</div>
                <h4 className="font-heading font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participate CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Participate in Our Research
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your participation helps advance our understanding of ASD and improves 
              outcomes for children and families everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 shadow-xl">
                <Search className="w-5 h-5 mr-2" />
                Find a Study
              </button>
              <a href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Contact Research Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Research

