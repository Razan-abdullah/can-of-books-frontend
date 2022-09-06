import React from 'react';
import axios from 'axios';
import BestBooks from './BestBooks';
import Footer from './Footer.js';
import Header from './Header.js';


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    bookArr : []
  }
}

  componentDidMount = () => {
    axios
    .get(` https://book-system1.herokuapp.com//getbooks`)
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
   onChange(newBooks) {   this.setState({ bookArr: newBooks });}

  render(){
    return(
    

      <div>
      <Header/>
       
          <BestBooks books={this.state.bookArr} onbooksChange={this.onChange}/>
         
         

        <Footer />
     
    </div>
    )
  }
}

export default App;