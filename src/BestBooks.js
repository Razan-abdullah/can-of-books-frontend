import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import UpdatForm from './form.js';
import AddForm from './addforms.js';

class BestBooks extends React.Component {
  

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  constructor(props){
    super(props);
    this.state = {
      showAddForm:false,
      showFlag : false,
      currentbook : {},
      books : []
    }
  }
  
    componentDidMount = () => {
      axios
      .get(`https://book-system1.herokuapp.com/getbooks`)
      // .get(`http://localhost:3100/getbooks`)
  
      .then(result =>{
        console.log(result.data);
        this.setState({
          books : result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
      
    }
  

   deletebook = (id) => {
    axios
    .delete(`https://book-system1.herokuapp.com/deletebook/${id}`) //http://localhost:3010/deleteCat?id=${id}
    // .delete(`http://localhost:3100/deletebook/${id}`)
    .then(result =>{
      this.setState({
        books : result.data
      })
    
      })
    
    .catch(err=>{
      console.log(err);
    })
  }


  openAddform = () =>{
    this.setState({
      showAddForm : true,
    })
    
  }

  handleCloseAdd = () =>{
    this.setState({
      showAddForm : false
    })
  }

  openForm = (item) =>{
    this.setState({
      showFlag : true,
      currentbook: item
    })
    
  }

  handleClose = () =>{
    this.setState({
      showFlag : false
    })
  }
    
  updatebook=(event)=>{

    event.preventDefault();
    let obj = {
      title : event.target.title.value,
      des : event.target.description.value,
      status:event.target.status.value,
    }

    const id = this.state.currentbook._id;
axios 
.put(`https://book-system1.herokuapp.com/update/${id}`,obj)
// .put(`http://localhost:3100/update/${id}`,obj)

.then(result=>{
  return this.setState({
    books: result.data,
  });
  // this.props.onbooksChange(result)
})
.catch(err=>{
  console.log(err);
})
  }
////////////////////////////////////////////////////////////////// add after sumbit in form
  addBook=(event)=>{
event.preventDefault();
let obj={
  title : event.target.title.value,
      des : event.target.description.value,
      status:event.target.status.value,


}

axios
    .post(`https://book-system1.herokuapp.com/addbook`, obj)
    // .post(`http://localhost:3100/addbook`, obj)

    .then(result =>{
      
        // this.props.onbooksChange(result.data)
        return this.setState({
          books: result.data,
        });
      
    })
    .catch(err=>{
      console.log(err);
    })
  }
//////////////////////////////////////render carsouels
  render() {
    return (
      <>

{/* /////////////////////////  carousels- step 1 ////////////////////////////////////////////// */}


     <div id="d1">
          {this.state.books.length ? (
            <div id="secondaryDiv" >
              <Carousel fade>
                {this.state.books.map((item) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={require("./1.jpg")}
                        alt="Slide"
                      />
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.des}</p>
                        <p>{item.status}</p>
                        <button onClick={() => this.openAddform()}>Add Book</button>
                        <button onClick={() => this.deletebook(item._id)}>Delete</button>
                        <button onClick={() => this.openForm(item)}>Update</button>
                      </Carousel.Caption>

                     

                    </Carousel.Item>
                  );
                })}
              </Carousel>
               
            </div>
          ) : (
            <h3>No Books Found :(</h3>
          )}
{/* ///////////////////////// end carousels ////////////////////////////////////////////// */}
<UpdatForm
        show = {this.state.showFlag}
        handleClose = {this.handleClose}
         Updatebook= {this.updatebook}
        currentbooks = {this.state.currentbook}
        />

<AddForm show = {this.state.showAddForm}
        handleClose = {this.handleCloseAdd}
         addBook= {this.addBook}
        />
        </div>
      
               </>
    );
  }
}

export default BestBooks;