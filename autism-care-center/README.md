# Autism Care Center Website

A professional medical website for an Autism Spectrum Disorder (ASD) treatment center specializing in children and adolescents with ASD and their families.

## 🚀 Features

### Frontend (React + Vite + Tailwind CSS)
- **Homepage** - Hero section, services overview, research highlights, testimonials
- **About Us** - Practice info, doctor profiles, team, mission
- **Services** - ABA Therapy, Speech Therapy, Occupational Therapy, Behavioral Therapy, Family Support, Diagnostic Assessments
- **Research** - Studies, papers, participation, news
- **Donate** - Donation system with tiers and secure payments
- **Appointments** - Online booking with intake forms
- **Patient Portal** - Secure login, appointments, messaging
- **Contact** - Location, form, phone, email, hours

### Backend (Node.js + Express + MongoDB)
- RESTful API
- User authentication (JWT)
- Appointment management
- Patient records (encrypted)
- Donation tracking
- Research data management
- Email notifications

## 📁 Project Structure

```
autism-care-center/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Research.jsx
│   │   │   ├── Donate.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── PatientPortal.jsx
│   │   │   └── Contact.jsx
│   │   ├── context/        # React context
│   │   │   └── AuthContext.jsx
│   │   ├── utils/          # Utility functions
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── models/             # MongoDB models
│   │   ├── User.js
│   │   ├── Appointment.js
│   │   ├── Donation.js
│   │   ├── Message.js
│   │   └── ResearchStudy.js
│   ├── routes/             # API routes
│   │   ├── auth.js
│   │   ├── appointments.js
│   │   ├── donations.js
│   │   ├── research.js
│   │   └── contact.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd server
npm install

# Create .env file from example
cp .env.example .env

# Edit .env with your configuration
# - MongoDB URI
# - JWT Secret
# - Email settings
# - Stripe keys

npm run dev
```

The backend will be available at `http://localhost:5000`

## 🔧 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/autism-care-center
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
STRIPE_SECRET_KEY=sk_test_your_key
FRONTEND_URL=http://localhost:3000
```

## 🎨 Design

- **Color Scheme**: Primary blue, secondary green, accent gold
- **Typography**: Inter for body, Poppins for headings
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **Styling**: Tailwind CSS

## 📱 Responsive Design

Fully responsive design that works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔒 Security Features

- JWT authentication
- Password hashing (bcrypt)
- HIPAA compliant design considerations
- Secure API endpoints
- Input validation

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist folder
```

### Backend (Heroku/Railway/Render)
```bash
# Set environment variables
# Deploy server
```

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions or support, please contact us at info@autismcarecenter.com

