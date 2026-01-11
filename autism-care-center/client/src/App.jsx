import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Research from './pages/Research'
import Donate from './pages/Donate'
import Appointments from './pages/Appointments'
import PatientPortal from './pages/PatientPortal'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="research" element={<Research />} />
        <Route path="donate" element={<Donate />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="portal" element={<PatientPortal />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App

