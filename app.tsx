import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from './pages/ProfilePage'
import { AdminPage } from './pages/AdminPage'
import { OwnerPage } from './pages/OwnerPage'
import { Toaster } from 'sonner'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/owner" element={<OwnerPage />} />
          </Routes>
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App 
