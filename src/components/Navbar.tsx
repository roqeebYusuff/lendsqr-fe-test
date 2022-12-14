import React, { useState, useContext } from 'react'
import { Dropdown, Input, InputGroup, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import logo from '../assets/logo.svg'
import searchIcon from '../assets/search.svg'
import notification from '../assets/bell.svg'
import menu from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'
import avatar from '../assets/avatar.png'
import { useAuth } from '../utils/Provider'
import { LendsqrUserContext } from '../utils/Provider';

const Navbar: React.FC = () => {
    const { logout, toggleSidebar } = useAuth()
    const { showSidebar } = useContext(LendsqrUserContext).user
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <nav className='dashboard-nav'>
            <div className="d-flex align-items-center">
                <div className="logo">
                    <img className='img-fluid' src={logo} alt="Lendsqr Logo" />
                </div>
                <div className="mainn w-100">
                    <div className='wrapper'>
                        <div className="search">
                            <InputGroup>
                                <Input type='text' name='search' id='search' placeholder='Search for anything' />
                                <div className="icon">
                                    <img src={searchIcon} alt="Search icon" />
                                </div>
                            </InputGroup>
                        </div>

                        <div className="others">
                            <ul>
                                <li>
                                    <a href="/">Docs</a>
                                </li>
                                <li>
                                    <img src={notification} alt="Notification icon" />
                                </li>
                                <li className='user'>
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle caret tag='div'>
                                            <img src={avatar} alt="User Avatar" />
                                            <span>Adedeji</span>
                                        </DropdownToggle>
                                        <DropdownMenu >
                                            <DropdownItem>Profile</DropdownItem>
                                            <DropdownItem>Settings</DropdownItem>
                                            <DropdownItem onClick={(e) => { e.preventDefault(); logout() }}>Logout</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                        <div className='hamburger' onClick={() => { toggleSidebar() }}>{showSidebar ? (
                            <img className='img-fluid' src={close} alt="Close" />
                        ) : (
                            <img className='img-fluid' src={menu} alt="Menu" />
                        )}</div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
