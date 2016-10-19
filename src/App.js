import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import ResultsContainer from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
