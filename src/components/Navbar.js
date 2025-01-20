import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(UserContext)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">User Directory</h1>
        <button onClick={toggleDarkMode} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

