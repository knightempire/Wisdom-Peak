import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(UserContext)

    return ( <
        input type = "text"
        placeholder = "Search users..."
        value = { searchTerm }
        onChange = {
            (e) => setSearchTerm(e.target.value) }
        className = "w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white" /
        >
    )
}

export default SearchBar