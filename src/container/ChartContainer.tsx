import React from 'react'

const ChartContainer = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='border rounded border-gray-300 '>
            {children}
        </div>
    )
}

export default ChartContainer