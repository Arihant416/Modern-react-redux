import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //The very first function to be called is the constructor
  constructor(props) {
    super(props);

    this.state = {lat: null};
  }

  //React says we have to define a render method
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
