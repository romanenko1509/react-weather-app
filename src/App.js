import React from 'react';
import './App.css';
import Info from "./components/Info";
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "e926124910809df40d4f149a4627417a";

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;

        if (city) {
            const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const DATA = await API_URL.json();

            this.setState({
                temp: Math.round(DATA.main.temp - 273),
                city: DATA.name,
                country: DATA.sys.country,
                error: undefined
            });
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                error: "Please, enter your city"
            });
        }

        // console.log(DATA);


    }

    render () {
        return (
            <div>
                <h1>Weather App</h1>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather temp={this.state.temp} city={this.state.city} country={this.state.country} error={this.state.error} />
            </div>
        );
    }
}

export default App;
