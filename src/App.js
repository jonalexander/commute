import React, { Component } from 'react';
import ConnectedSearchBar from './components/SearchBar'
import ResultsContainer from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedSearchBar />
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
