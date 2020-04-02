import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  //The very first function to be called is the constructor

  state = {lat: null, errorMessage: ''};

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition (
      position => this.setState ({lat: position.coords.latitude}),
      err => this.setState ({errorMessage: err.message})
    );
  }

  //React says we have to define a render method
  render () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading ...</div>;
  }
}

ReactDOM.render (<App />, document.querySelector ('#root'));
