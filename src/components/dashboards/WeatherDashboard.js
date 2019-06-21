import React, { Component } from 'react';

class WeatherDashboard extends Component {
  state = {
    weather: '',
  }

  getWeather() {
    // fetch the weather data from london using open weather api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1680c48b1b89671b166cef2933175012`)
      .then(res => res.json())
      .then(
        (res) => {
            let celcius = parseFloat(res.main.temp);
            let conversion = 273.15;
            let temp = (celcius - conversion).toFixed(2);
          this.setState({
            weather: {
                main: res.weather[0].main,
                temp: temp,
                location: res.name
            }
          });
        },
        (err) => {console.log(err)}
      )
      .catch((err) => {
        console.log("You location hasn't been Found");
    });
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    return (
      <div className="WeatherDashboard">
       <h1>Today's Weather</h1>
        <p className="weather-text">Location: {this.state.weather.location}</p> 
        <p className="weather-text">Temperature: {this.state.weather.temp} &#8451;</p> 
        <p className="weather-text">Weather type: {this.state.weather.main}</p>
      </div>
    )
  }
}

export default WeatherDashboard;
