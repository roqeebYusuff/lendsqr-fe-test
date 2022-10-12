import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { LendsqrUserContext } from '../utils/Provider';

interface Props {
    children?: React.ReactNode
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
    const { showSidebar } = useContext(LendsqrUserContext).user
    return (
        <section className='main'>
            <Navbar />
            <div className="main-wrapper">
                <aside className={`sidebar ${showSidebar ? 'showSidebar' : 'hideSidebar'}`}>
                    <Sidebar />
                </aside>
                <main>
                    {children || <Outlet />}
                </main>
            </div>
        </section>
    )
}

export default DashboardLayout