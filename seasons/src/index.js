import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //The very first function to be called is the constructor
  constructor(props) {
    super(props);
    //This is the only time we do direct assignment to this.state
    this.state = {lat: null, errorMessage: ''};
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //We Called setState !!!to update the state
        this.setState({lat: position.coords.latitude});
        //We did not !!!
        // this .state.lat=position.coords.latitude
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  //React says we have to define a render method
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading ...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
