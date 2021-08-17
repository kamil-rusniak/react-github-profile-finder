import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
 

    return (
      <nav className='bg-myblue py-6 md:px-14 px-6 text-2xl text-white flex flex-col sm:flex-row  text-center sm:justify-between'>
        <h1 className='font-semibold'> <Link to='/'>{title}</Link></h1>
        <div className='flex gap-8 sm:gap-14 text-center justify-center mt-6 sm:mt-0'>
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
