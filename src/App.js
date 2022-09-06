import React from 'react';
import axios from 'axios';

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
        <h1>Book  System</h1>
        {this.state.bookArr.map(item =>{
          return(
            <div>
              <h3> title : {item.title} </h3>
              <p>description  : {item.des}</p>
              <p>status  : {item.status}</p>

            </div>
          )
        })}
      </div>
    )
  }
}

export default App;