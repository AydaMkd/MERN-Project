
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { NavItem } from 'react-bootstrap';


function TopBar () {
  const { user } = useSelector((state) => state.auth)
 
  return (
    <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/"><h2>Home</h2></Nav.Link><br/>

                  <Nav.Link href="/create"><h2>Add Activity</h2></Nav.Link><br/>
                  {/* <Nav.Link href="/signIn">Sign In</Nav.Link>
                  <Nav.Link href="/signUp">Add User</Nav.Link> */}

                  <Nav.Link href="/profile"><h2>User Profile</h2></Nav.Link>
                  <Nav.Link href="/update"><h2>Edit Profile</h2></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
  );
}

export default TopBar;