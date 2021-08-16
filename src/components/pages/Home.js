import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import backgroundImage from '../../img/background.svg';
const Home = () => {
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
