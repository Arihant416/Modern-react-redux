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
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error:{this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
