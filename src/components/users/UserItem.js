import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url} }) => {
  return (
    <div className='bg-white border-2 border-black w-72 text-lg flex flex-col justify-center items-center p-4 '>
      <img src={avatar_url} alt='' className='rounded-full w-16' />
      <h3 className='my-4'>{login}</h3>
      <div className='mt-1'>
        <Link to={`/user/${login}`} className='py-2 px-6 bg-mydarkblue text-white'>
          Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;
