import React from 'react';
import axios from 'axios';
import BestBooks from './BestBooks';
import Footer from './Footer.js';
import Header from './Header.js';
import Profile from './profile.js';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
class App extends React.Component {

  render(){

    const { isAuthenticated } = this.props.auth0;

    return(
     
<>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={isAuthenticated ?   <BestBooks /> :"Welcome to our website you can log in to continue browseing " }
            >
            </Route>
            <Route 
              exact path="/profile"
              element={isAuthenticated && <Profile />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>)
  }
}

export default withAuth0(App);
