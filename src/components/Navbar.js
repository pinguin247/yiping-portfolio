import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    // run this only location variable has changed
    //navbar will close whenever navbar link is clicked
    useEffect(() =>{
        setExpandNavbar(false)
    }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open":"close"}>
        <div className='toggleButton'>
            <button 
            onClick={() =>{
                setExpandNavbar((prev) => !prev)}}>
            <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/yiping-portfolio">Home</Link>
            <Link to="/yiping-portfolio/projects">Projects</Link>
            <Link to="/yiping-portfolio/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar;