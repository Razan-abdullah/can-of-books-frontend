import React from 'react';
import axios from 'axios';
import BestBooks from './BestBooks';
import Footer from './Footer.js';
import Header from './Header.js';


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
    

      <div>
      <Header/>
       
          <BestBooks   />
         
         

        <Footer />
     
    </div>
    )
  }
}

export default App;