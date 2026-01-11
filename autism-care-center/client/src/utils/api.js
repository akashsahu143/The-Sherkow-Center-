import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/portal'
    }
    return Promise.reject(error)
  }
)

export default api

// API helper functions
export const authAPI = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (name, email, password) => api.post('/auth/register', { name, email, password }),
  verify: () => api.get('/auth/verify'),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email })
}

export const appointmentAPI = {
  getAll: (params) => api.get('/appointments', { params }),
  getByUser: (userId) => api.get(`/appointments/user/${userId}`),
  create: (data) => api.post('/appointments', data),
  update: (id, data) => api.patch(`/appointments/${id}`, data),
  cancel: (id) => api.delete(`/appointments/${id}`),
  getStats: () => api.get('/appointments/stats/summary')
}

export const donationAPI = {
  getAll: (params) => api.get('/donations', { params }),
  create: (data) => api.post('/donations', data),
  updateStatus: (id, data) => api.patch(`/donations/${id}/payment-status`, data),
  sendReceipt: (id) => api.post(`/donations/${id}/send-receipt`),
  getStats: () => api.get('/donations/stats')
}

export const researchAPI = {
  getAll: (params) => api.get('/research', { params }),
  getById: (id) => api.get(`/research/${id}`),
  create: (data) => api.post('/research', data),
  update: (id, data) => api.patch(`/research/${id}`, data),
  register: (id, data) => api.post(`/research/${id}/register`, data),
  getStats: () => api.get('/research/stats/summary')
}

export const contactAPI = {
  getAll: (params) => api.get('/contact', { params }),
  create: (data) => api.post('/contact', data),
  update: (id, data) => api.patch(`/contact/${id}`, data),
  getStats: () => api.get('/contact/stats')
}

