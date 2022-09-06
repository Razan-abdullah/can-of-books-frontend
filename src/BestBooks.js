import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

class BestBooks extends React.Component {
  

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  
  

  
    

  render() {
    return (
      <>
      
        <div id="d1">
          {this.props.books.length ? (
            <div id="secondaryDiv" style={{ width: "400px" }}>
              <Carousel fade>
                {this.props.books.map((item) => {
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
                      
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
               
            </div>
          ) : (
            <h3>No Books Found :(</h3>
          )}

        </div>
      
               </>
    );
  }
}

export default BestBooks;