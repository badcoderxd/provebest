import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './containers/auth/login/login';
import PrivateRoute from './components/HOC/PrivateRoute';
import Home from './components/Home';
import SignUp from './containers/auth/signup/Signup';

/**
 * @author 
 * @returns Allroutes can be managed here
 * @private routes only for logged in user
 * @end 
 */

function AllRoute() {
    return(
        <>
          <Router>
              <Switch>
                  <Route path='/' exact component={Login} />
                  <Route path='/signup' exact component={SignUp} />
                  <PrivateRoute path='/home' exact component={Home} />
              </Switch>
          </Router>
        </>
    )
}

export default AllRoute;