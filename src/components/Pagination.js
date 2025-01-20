import React from "react"

const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded ${
                currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination

