import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers: {
          Authorization:
            'Client-ID e-9EfEuNY3evh9dcwr26PGll5HI1e1twXOua5FreKX4',
        },
      })
      .then(response => {
        console.log(response.data.results);
      });
  }
  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
