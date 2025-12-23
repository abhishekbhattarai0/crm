import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const CustomerProfile = () => {
    useEffect(() => {
        console.log(params)


    }, [])

    const params = useParams()
    const handleClick = () => {
        console.log(params)
    }
    return (
        <div onClick={handleClick} className='flex items-center justify-center'>
            <div>{params}</div>
        </div>
    )
}

export default CustomerProfile