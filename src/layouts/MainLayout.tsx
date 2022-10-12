import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
    children?: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>{children || <Outlet />}</>
    )
}

export default MainLayout