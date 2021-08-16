import React, { Fragment } from 'react';
import backgroundImage from '../../img/background.svg';
const About = () => {
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  return (
    <Fragment>
      <h1 className='mb-6 text-3xl font-bold text-myblue'>About this app</h1>
      <div className='text-center text-xl flex flex-col justify-center items-center w-11/12'>
        <p>
          Github Profile Finder built by
          <a href='https://kamilrusniak.com' className='border-b border-myblue'>
            {' '}
            Kamil Ruśniak{' '}
          </a>
          using React.js and Tailwind CSS
        </p>
        <p className='my-6'>
          Background images from{' '}
          <a href='https://undraw.co' className='border-b border-myblue'>
            {' '}
            unDraw{' '}
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default About;
