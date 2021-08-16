import React from 'react';
import NotFoundImg from '../../img/notfound.svg';

const NotFound = () => {
  document.body.style.backgroundImage = `url(${NotFoundImg})`;
  return (
    <div>
      <h1 className='text-4xl mt-6'>The page you are looking for does not exist</h1>
    </div>
  );
};

export default NotFound;
