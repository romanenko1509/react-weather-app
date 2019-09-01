import React from 'react';

class Form extends React.Component {
    render () {
        return (
            <form className="weather_form" onSubmit={this.props.weatherMethod} >
                <input type="text" name="city" placeholder="Your city"/>
                <button>Go!</button>
            </form>
        );
    }
}

export default Form;
