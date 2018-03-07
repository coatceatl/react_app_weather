import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import {
  Navbar,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

class Header extends Component {
  state = {
    location: ''
  };

  fetchData = (e) => {
    e.preventDefault();
    alert('search', this.state.location);
  };

  changeLocation = (e) => {
    this.setState({
      location: e.target.value
    });
  };

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
                <FormControl
                  type="text"
                  placeholder={"Search"}
                  value={this.state.location}
                  onChange={this.changeLocation}
                />
              </FormGroup>
              <Button onClick={this.fetchData} type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default Header;
