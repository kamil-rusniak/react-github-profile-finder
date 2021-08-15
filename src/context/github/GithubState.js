import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import { SET_LOADING, SEARCH_USERS, GET_USER, CLEAR_USERS } from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Search Users

    // Get User

    // Clear Users

    // Set Loading

    return <githubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading
    }}>
        {props.children}
    </githubContext.Provider>
}

export default GithubState;