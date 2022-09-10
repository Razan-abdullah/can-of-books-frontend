// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { withAuth0 } from '@auth0/auth0-react';

// function Header() {



//   return (
//     <Navbar variant="dark" bg="dark" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#home">Book Systems</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-dark-example" />
//         <Navbar.Collapse id="navbar-dark-example">
//           <Nav>
//             <NavDropdown
//               id="nav-dropdown-dark-example"
//               title="Dropdown"
//               menuVariant="dark"
//             >
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default withAuth0(Header);


import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './login.js';
import LogoutButton from './logout.js';

import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem className="nav"><Link to="/" className="nav-link">Home</Link></NavItem>
        {isAuthenticated && <NavItem className="nav"><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
        <NavItem className="nav"><Login/></NavItem>
        <NavItem className="nav"><LogoutButton /></NavItem>
      </Navbar>
    )
  }
}

export default withAuth0(Header);