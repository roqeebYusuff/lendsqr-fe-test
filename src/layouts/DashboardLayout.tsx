import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

interface Props {
    children?: React.ReactNode
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
    return (
        <main className='main'>
            <Navbar />
            {children || <Outlet />}
        </main>
    )
}

export default DashboardLayout