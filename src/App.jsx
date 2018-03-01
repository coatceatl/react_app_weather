import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Header.jsx';
import CurrentDay from './CurrentDay.jsx';
import "./App.css";

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <CurrentDay />
      </div>
    );
  }
}

export default App
/*
import {
  Col,
  Grid,
  Nav,
  NavItem,
  Navbar,
  Row,
} from "react-bootstrap";

const PLACES = [
  { name: "Haifa",     id: "294801" },
  { name: "Jerusalem", id: "281184" },
  { name: "Netanya",   id: "294071" },
  { name: "Tel Aviv",  id: "293397" }
];

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }
  componentDidMount() {
    const id = this.props.id;
    //    const URL = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    //    const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt='icon' />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} meter/sec</p>
        <p>Clouds: {weatherData.clouds.all} %</p>
        <p>Pressure: {weatherData.main.pressure} hPa</p>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Weather App
            </Navbar.Brand>
          </Navbar.Header>
          </Navbar>
          <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} id={PLACES[activePlace].id} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
*/

