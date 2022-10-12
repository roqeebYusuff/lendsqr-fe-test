import React from 'react'
import { Customers, Businesses, Settings } from '../data/SidebarItems'
import briefcase from '../assets/icons/briefcase.svg';
import home from '../assets/icons/home.svg';
import signout from '../assets/icons/sign-out 1.svg';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../utils/Provider';

const Sidebar: React.FC = () => {
    const { logout } = useAuth()
    return (
        <div className={`sidebar-container py-4 `}>
            <div className="sidebar-menu">
                <ul className='menu-container'>
                    <li className='menu-item'>
                        <span>
                            <img src={briefcase} alt="Switch Organization" />
                            Switch Organization
                        </span>
                    </li>
                </ul>
            </div>
            <div className="mt-3">
                <div className="sidebar-menu">
                    <ul className='menu-container'>
                        <li className='menu-item'>
                            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active' : ''}>
                                <img src={home} alt="Home" />
                                Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <h5 className='sidebar-heading'>Customers</h5>
            {
                Customers.map((item, index) => (
                    <div key={index} className="sidebar-menu">
                        <ul className='menu-container'>
                            <li className='menu-item'>
                                <NavLink to={item.to} className={({ isActive }) => isActive ? 'active' : ''}>
                                    <img src={item.icon} alt="" />
                                    {item.title}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                ))
            }
            <h5 className='sidebar-heading'>Businesses</h5>
            {
                Businesses.map((item, index) => (
                    <div key={index} className="sidebar-menu">
                        <ul className='menu-container'>
                            <li className='menu-item'>
                                <NavLink to={item.to} className={({ isActive }) => isActive ? 'active' : ''}>
                                    <img src={item.icon} alt="" />
                                    {item.title}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                ))
            }
            <h5 className='sidebar-heading'>Settings</h5>
            {
                Settings.map((item, index) => (
                    <div key={index} className="sidebar-menu">
                        <ul className='menu-container'>
                            <li className='menu-item'>
                                <NavLink to={item.to} className={({ isActive }) => isActive ? 'active' : ''}>
                                    <img src={item.icon} alt="" />
                                    {item.title}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                ))
            }
            <div className="mt-3">
                <div className="sidebar-menu">
                    <ul className='menu-container'>
                        <li className='menu-item'>
                            <NavLink to='/logout' onClick={(e) => { e.preventDefault(); logout() }} className={({ isActive }) => isActive ? 'active' : ''}>
                                <img src={signout} alt="Home" />
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
