import React, { useState } from 'react';
import { FaBars }from "react-icons/fa";
import { NavLink } from 'react-router-dom';
// import LogoImage from  '../components/images/logowhitw.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { DashboardOutlined } from '@mui/icons-material';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<DashboardIcon/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<ProductionQuantityLimitsIcon />
        },
        {
            path:"/mss",
            name:"MSS",
            icon:<DashboardOutlined />
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<SettingsIcon />
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<LogoutIcon />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin
                   </h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px" , cursor:'pointer'}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;