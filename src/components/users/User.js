import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getSingleUser } = githubContext;

  useEffect(() => {
    getSingleUser(match.params.login);
    // eslint-disable-next-line
  }, []); //empty brackets so it doesnt loop but run only once like componentDidMount()
  //  doing eslint-disable-next-line above because otherwise it gives warning: "React Hook useEffect has missing dependencies" (but adding dependencies in this case causes it to loop again))

  const {
    name,
    avatar_url,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    location,
    public_repos,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link
        to='/'
        className='bg-mydarkgray text-center text-black text-lg font-medium mt-6 px-2 py-2 w-3/12 cursor-pointer'
      >
        Back to search
      </Link>

      <div className='bg-white mt-8 w-12/12 sm:w-9/12 flex flex-col'>
        <div className='my-4 sm:mx-2 flex items-center justify-around'>
          <div className=' flex flex-col mx-2 sm:mx-0 text-center items-center justify-center w-6/12'>
            <img className='rounded-full w-32 mb-1' src={avatar_url} alt='' />
            <p>{name}</p>
          </div>

          <div className='w-6/12 mx-2 sm:mx-0'>
            <p className='font-bold text-lg mb-2'>Bio</p>
            <p className='text-sm sm:text-base'>{bio}</p>
          </div>
        </div>

        <div className='my-8 flex items-center justify-around'>
          <div className='w-6/12 text-center mx-2 sm:mx-0 text-sm sm:text-base'>
            <p>Followers: {followers}</p>
            <p className='my-4'>Following: {following}</p>
            <p>Public repos: {public_repos}</p>
          </div>

          <div className='w-6/12 text-sm sm:text-base mx-2 sm:mx-0'>
            <p>
              <strong>Username: </strong>
              {login}
            </p>
            <p className='my-4'>
              <strong>Website: </strong>
              {blog}
            </p>
            <p>
              <strong>Location: </strong>
              {location}
            </p>
          </div>
        </div>

        <a
          href={html_url}
          target='_blank'
          rel='noreferrer'
          className='border-2 border-black bg-mydarkblue text-white text-center m-auto mb-4 px-2 py-2 w-3/12 cursor-pointer'
        >
          Github Profile
        </a>
      </div>
    </Fragment>
  );
};

export default User;
