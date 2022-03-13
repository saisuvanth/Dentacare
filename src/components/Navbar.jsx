import React from 'react';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';

const MyNavbar = () => {
  return (
	<Navbar bg="light" expand="lg" className='mt-2' sticky='top' fixed='top'>
	<Container fluid>
	  <Navbar.Brand href="#">Dentacare</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
		<Nav className="mx-auto me-2 my-lg-0">
		  <Nav.Link href="#action1">About</Nav.Link>
		  <Nav.Link href="#action2">Services</Nav.Link>
		  <Nav.Link href="#">
			Warranty
		  </Nav.Link>
		  <Nav.Link href="#">New Patients</Nav.Link>
		</Nav>
		<Form className="d-flex">
		  <FormControl
			type="search"
			placeholder="Search"
			className="me-2"
			aria-label="Search"
		  />
		  <Button variant="outline-success">Search</Button>
		</Form>
	  </Navbar.Collapse>
	</Container>
  </Navbar>
  )
}

export default MyNavbar