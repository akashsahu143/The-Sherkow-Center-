import { motion } from 'framer-motion'
import { Heart, Award, Users, BookOpen, Shield, Lightbulb } from 'lucide-react'

function About() {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      credentials: 'MD, PhD, Board-Certified Developmental Pediatrician',
      bio: 'Over 20 years of experience in autism diagnosis and treatment.',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Clinical Psychologist',
      credentials: 'PhD, Licensed Psychologist',
      bio: 'Specializes in behavioral interventions and family therapy.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'BCBA Supervisor',
      credentials: 'MS, BCBA, Certified Behavior Analyst',
      bio: 'Leading our ABA therapy programs with 15 years of experience.',
    },
    {
      name: 'Dr. James Williams',
      role: 'Speech-Language Pathologist',
      credentials: 'PhD, CCC-SLP',
      bio: 'Expert in communication disorders and augmentative communication.',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every child and family with genuine care, respect, and empathy.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously seek better ways to help children reach their potential.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our practices.',
    },
    {
      icon: BookOpen,
      title: 'Excellence',
      description: 'We strive for the best outcomes through evidence-based treatments.',
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              About Autism Care Center
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Dedicated to providing exceptional care for children and adolescents with 
              Autism Spectrum Disorder and their families since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At Autism Care Center, our mission is to help children and adolescents with 
                Autism Spectrum Disorder reach their full potential through comprehensive, 
                evidence-based treatments delivered with compassion and expertise.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We believe that every child deserves the opportunity to thrive, and we are 
                committed to providing the highest quality care in a supportive, nurturing 
                environment that celebrates each child's unique strengths and abilities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of dedicated professionals works collaboratively with families to 
                develop individualized treatment plans that address each child's specific needs 
                and goals, ensuring the best possible outcomes for every child in our care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Our Core Values</h3>
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our History</h2>
            <p className="section-subtitle">
              A journey of growth and commitment to serving children with ASD
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-primary-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { year: '2010', title: 'Foundation', description: 'Autism Care Center was founded with a vision to provide comprehensive autism care.' },
                { year: '2013', title: 'Expansion', description: 'Expanded services to include speech and occupational therapy.' },
                { year: '2016', title: 'Research Initiative', description: 'Launched our research division to advance ASD treatment knowledge.' },
                { year: '2019', title: 'Community Impact', description: 'Served our 500th family and launched family support programs.' },
                { year: '2023', title: 'New Facility', description: 'Opened our state-of-the-art treatment center with expanded capacity.' },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 md:px-8">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="text-primary-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h4 className="font-heading font-bold text-xl text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our experienced team of professionals is dedicated to providing the best care for your child
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center card-hover"
              >
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-2">{member.role}</div>
                <div className="text-xs text-gray-500 mb-3">{member.credentials}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center justify-center px-6 py-3 bg-primary-100 rounded-full text-primary-700">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium">50+ Expert Staff Members Ready to Help</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '500+', label: 'Children Helped' },
              { number: '15+', label: 'Years of Experience' },
              { number: '50+', label: 'Expert Staff' },
              { number: '98%', label: 'Parent Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

