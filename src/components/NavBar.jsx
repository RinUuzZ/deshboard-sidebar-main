import React, { useState } from 'react';
import './Navbar.css';
import LogoImage from '../components/images/logowhitw.png';
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import ConfirmModal from './ConfirmModal'; 

const Navbar = () => {
    const [isMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); 


    const handleLogout = () => {
        setIsModalOpen(true);
    };

   
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmLogout = () => {
        alert('Logged out successfully.'); 
        setIsModalOpen(false);
    };

    return (
        <>
            <nav className="navbar">
            <a href="/" className="nav-logo">
                <img src={LogoImage} alt="logo" />
            </a>
            <div className="nav-right">
                
                <button onClick={handleLogout} className="nav-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <IoLogOutOutline className='text-white' size={25} color='#fff' />
                </button>
                <a href="/profile" className="nav-item">
                    <FaUserAlt className='text-white' size={30} color='#fff' />
                </a>
            </div>
            {
            isMobileMenuOpen && (
                <div className="mobile-menu">
                    
                    <button onClick={handleLogout} className="mobile-nav-item" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: '10px' }}>Logout</button>
                    <a href="/profile" className="mobile-nav-item">Profile</a>
                </div>
            ) 
            }
        </nav>
            <ConfirmModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmLogout}
            />
        </>
    );
};

export default Navbar;
