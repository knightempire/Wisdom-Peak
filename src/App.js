import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserContext"
import Home from "./components/Home"
import UserDetail from "./components/UserDetail"
import Navbar from "./components/Navbar"

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App

