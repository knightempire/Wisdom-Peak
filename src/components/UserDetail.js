import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetail = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                const data = await response.json();
                setUser(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) return <div className = "text-center" > Loading... < /div>;
    if (error) return <div className = "text-center text-red-500" > { error } < /div>;
    if (!user) return <div className = "text-center" > User not found < /div>;

    return ( <
        div className = "bg-white dark:bg-gray-800 p-6 rounded shadow" >
        <
        h1 className = "text-3xl font-bold mb-4 text-gray-800 dark:text-white" > { user.name } < /h1>{" "} <
        p className = "mb-2 text-gray-600 dark:text-gray-300" >
        <
        strong > Email: < /strong> {user.email}{" "} <
        /p>{" "} <
        p className = "mb-2 text-gray-600 dark:text-gray-300" >
        <
        strong > Phone: < /strong> {user.phone}{" "} <
        /p>{" "} <
        p className = "mb-2 text-gray-600 dark:text-gray-300" >
        <
        strong > Company: < /strong> {user.company.name}{" "} <
        /p>{" "} <
        p className = "mb-4 text-gray-600 dark:text-gray-300" >
        <
        strong > Website: < /strong> {user.website}{" "} <
        /p>{" "} <
        Link to = "/"
        className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >
        Go Back { " " } <
        /Link>{" "} <
        /div>
    );
};

export default UserDetail;