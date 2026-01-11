import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Autism Care Center
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to providing exceptional care for children and adolescents 
              with Autism Spectrum Disorder and their families since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-primary-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                  Research
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-primary-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-primary-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-primary-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></span>
                ABA Therapy
              </li>
              <li className="hover:text-primary-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></span>
                Speech Therapy
              </li>
              <li className="hover:text-primary-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></span>
                Occupational Therapy
              </li>
              <li className="hover:text-primary-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></span>
                Behavioral Therapy
              </li>
              <li className="hover:text-primary-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></span>
                Family Support
              </li>
              <li className="hover:text-primary-400 transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></span>
                Diagnostic Assessments
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span>123 Medical Center Drive<br />Suite 100, City, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>info@autismcarecenter.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Autism Care Center. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/hipaa" className="text-gray-500 hover:text-primary-400 transition-colors">
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

