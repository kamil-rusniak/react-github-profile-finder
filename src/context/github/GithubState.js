import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import { SET_LOADING, SEARCH_USERS, GET_USER, CLEAR_USERS } from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  let githubToken = process.env.REACT_APP_GITHUB_TOKEN;

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      }
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const getSingleUser = async (username) => {
    setLoading();

    const res = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getSingleUser,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
