import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>

            <Link className='link' to='/'>HOME</Link>
            <Link className='link' to='/Reviews'>REVIEWS</Link>
            <Link className='link' to='/Dashboard'>DASHBOARD</Link>
            <Link className='link' to='/Blogs'>BLOGS</Link>
            <Link className='link' to='/Services'>SERVICES</Link>

        </div>
    );
};

export default Navbar;