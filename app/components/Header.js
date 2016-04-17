import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          Dispatch
        </Navbar.Brand>

        <Nav>
          <NavItem>Dashboard</NavItem>
          <NavItem>Active Vehicles</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
