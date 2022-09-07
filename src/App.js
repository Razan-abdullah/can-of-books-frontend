import React from 'react';
import axios from 'axios';
import BestBooks from './BestBooks';
import Footer from './Footer.js';
import Header from './Header.js';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
// constructor(props){
//   super(props);
//   this.state = {
//     bookArr : []
//   }
// }

//   componentDidMount = () => {
//     axios
//     .get(`https://book-system1.herokuapp.com/getbooks`)
//     // .get(`http://localhost:3100/getbooks`)

  render(){
    return(
      const { isAuthenticated } = this.props.auth0;


      <div>
      <Header/>
       
          <BestBooks   />
         
         

        <Footer />
     
    </div>
    )
  }
}

export default App;