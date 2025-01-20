import React, { createContext, useState, useEffect, useCallback } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [sortOrder, setSortOrder] = useState("asc")
    const [darkMode, setDarkMode] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(5)

    const fetchUsers = useCallback(async() => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if (!response.ok) {
                throw new Error("Failed to fetch users")
            }
            const data = await response.json()
            setUsers(data)
            setFilteredUsers(data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    useEffect(() => {
        const filtered = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        const sorted = [...filtered].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.name.localeCompare(b.name)
            } else {
                return b.name.localeCompare(a.name)
            }
        })
        setFilteredUsers(sorted)
        setCurrentPage(1)
    }, [users, searchTerm, sortOrder])

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"))
    }

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode)
        document.documentElement.classList.toggle("dark")
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)

    return ( <
        UserContext.Provider value = {
            {
                users: currentUsers,
                loading,
                error,
                searchTerm,
                setSearchTerm,
                sortOrder,
                toggleSortOrder,
                darkMode,
                toggleDarkMode,
                currentPage,
                usersPerPage,
                totalUsers: filteredUsers.length,
                paginate,
            }
        } >
        { children } <
        /UserContext.Provider>
    )
}