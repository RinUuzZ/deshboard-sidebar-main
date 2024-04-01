import React from 'react'
import './Logout.css'

const Logout = () => {

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  };

  return (
    <div className="container-flex">
            <h1 className='text-center text-#333333'>Logout Successful</h1>
            <p>You have been successfully logged out.</p>
            <button className='logout-button' onClick={handleLogout}>Confirm Logout</button>  
        </div>
  )
}

export default Logout
