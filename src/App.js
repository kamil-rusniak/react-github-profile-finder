import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import About from './components/pages/About';
import Users from './components/users/Users';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import axios from 'axios';
import GithubState from './context/github/GithubState';

const App = () => {

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  const getSingleUser = async (username) => {
    setLoading(true)

    const res = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    setUser(res.data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

 const showAlert = (message, type) => {
    setAlert(message, type)

    setTimeout(() => showAlert(null), 5000);
  };


    return (
     <GithubState>
      <Router>
        <div className='App'>
          <Navbar title='Github Profile Finder' />
          <div className='mt-8 flex flex-col justify-center items-center w-full'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClearBtn={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact path={`/user/:login`}
                render={(props) => (
                  <User
                    {...props}
                    getSingleUser={getSingleUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState> 
    );
}

export default App;
