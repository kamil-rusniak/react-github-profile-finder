import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
 

    return (
      <nav className='bg-myblue py-6 px-14 text-2xl text-white flex justify-between'>
        <h1>{title}</h1>
        <div className='flex gap-14'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
      </nav>
    );
}

Navbar.defaultProps = {
  title: 'Github Profile Finder',
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;
