import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // better to use arrow functions here beacause otherwise form must have "onSubmit={this.onSubmit.bind(this)}" ("this" keyword works different with arrow functions)
  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === ''){
        this.props.setAlert('Please enter something', 'fail');
    } else{
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }
   
  };

  render() {
      const {clearUsers, showClearBtn} = this.props
    return (
      <div className='mb-8 flex flex-col justify-center items-center w-full'>
        <form className='w-full flex justify-center items-center' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Enter username'
            className="border-2 border-black px-2 py-2 w-6/12"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' value='Search' className="border-2 border-l-0 border-black bg-mydarkblue text-white px-2 py-2 w-1/12 cursor-pointer" />
        </form>
        {showClearBtn && (
          <button className="bg-mydarkgray text-black text-lg font-medium mt-6 py-2 w-3/12 cursor-pointer" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
