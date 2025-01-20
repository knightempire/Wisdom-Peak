import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import SearchBar from "./SearchBar"
import Pagination from "./Pagination"

const Home = () => {
    const { users, loading, error, sortOrder, toggleSortOrder, currentPage, usersPerPage, totalUsers, paginate } =
    useContext(UserContext)

    if (loading) return <div className = "text-center" > Loading... < /div>
    if (error) return <div className = "text-center text-red-500" > { error } < /div>

    return ( <
        div >
        <
        h1 className = "text-3xl font-bold mb-4 text-gray-800 dark:text-white" > User Directory < /h1> <
        SearchBar / >
        <
        button onClick = { toggleSortOrder }
        className = "mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >
        Sort { sortOrder === "asc" ? "Z-A" : "A-Z" } <
        /button> <
        div className = "grid gap-4 md:grid-cols-2 lg:grid-cols-3" > {
            users.map((user) => ( <
                Link key = { user.id }
                to = { `/user/${user.id}` }
                className = "block" >
                <
                div className = "bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow" >
                <
                h2 className = "text-xl font-semibold mb-2 text-gray-800 dark:text-white" > { user.name } < /h2> <
                p className = "text-gray-600 dark:text-gray-300" > { user.email } < /p> <
                p className = "text-gray-600 dark:text-gray-300" > { user.address.city } < /p> <
                /div> <
                /Link>
            ))
        } <
        /div> <
        Pagination currentPage = { currentPage }
        usersPerPage = { usersPerPage }
        totalUsers = { totalUsers }
        paginate = { paginate }
        /> <
        /div>
    )
}

export default Home