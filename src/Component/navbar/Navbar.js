import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>

            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/Reviews'>Reviews</Link>
            <Link className='link' to='/Blogs'>Blogs</Link>
            <Link className='link' to='/Services'>Services</Link>

        </div>
    );
};

export default Navbar;