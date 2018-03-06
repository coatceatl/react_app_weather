import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
//import './Header.css';

import {
  Navbar,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Weather App
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default Header;
