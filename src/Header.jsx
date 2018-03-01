import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Header.css';

import {
  Navbar,
} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className='account-info'>
          <Navbar.Header>
            <Navbar.Brand>
              React Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Header;
