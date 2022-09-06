import React from 'react';
import axios from 'axios';
import BestBooks from './BestBooks';
import Footer from './Footer.js';
import Header from './Header.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    bookArr : []
  }
}

  componentDidMount = () => {
    axios
    .get(`http://localhost:3100/getbooks`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        bookArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
    
  }

  render(){
    return(
    

      <div>
      <Header/>
       
          <BestBooks books={this.state.bookArr}/>
         
         

        <Footer />
     
    </div>
    )
  }
}

export default App;