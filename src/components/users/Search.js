import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showClearBtn, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  // better to use arrow functions here beacause otherwise form must have "onSubmit={this.onSubmit.bind(this)}" ("this" keyword works different with arrow functions)
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'fail');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='mb-8 flex flex-col justify-center items-center w-full'>
      <form
        className='w-full flex justify-center items-center'
        onSubmit={onSubmit}
      >
        <input
          type='text'
          name='text'
          placeholder='Enter username'
          className='border-2 border-black px-2 py-2 w-6/12'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='border-2 border-l-0 border-black bg-mydarkblue text-white px-2 py-2 w-1/12 cursor-pointer'
        />
      </form>
      {showClearBtn && (
        <button
          className='bg-mydarkgray text-black text-lg font-medium mt-6 py-2 w-3/12 cursor-pointer'
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClearBtn: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
