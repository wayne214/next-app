'use client'

import React, {useState} from 'react'

async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return {
        message: 'Hello, Dashboard',
    }
}
export default async function Page() {
    const {message} = await getData()

    const [error, setError] = useState(false)

    const handleGetError = () => {
        setError(true)
    }

    return (
        <>(error ? Error(): <button onClick={handleGetError}>Get Error</button>)</>
    )
}