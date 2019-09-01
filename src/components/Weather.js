import React from 'react';

class Weather extends React.Component {
    render () {
        return (
            <div>
                { this.props.city &&
                    <div className="weather_wrapper">
                        <div className="weather_city">Location: <b>{this.props.city}, <span className="weather_country">{this.props.country}</span></b></div>
                        <div className="weather_temp">Temperature: <b>{this.props.temp}</b> ℃</div>
                    </div>
                }
                <p className="weather_error">{this.props.error}</p>
            </div>
        );
    }
}

export default Weather;
