import React, { Component } from 'react';
import ResultRow from './ResultRow';
import { connect } from 'react-redux'

class Results extends Component {

  displayRows() {
    if (typeof this.props.weatherData !== "undefined"){
      return this.props.weatherData.weatherData.map( (info) => {
          <ResultRow info={ info } />
      })
    }
  }

  render() {
    debugger
    return(
      <div> { this.displayRows() } </div>
    )
  }
}

const ResultsContainer = connect(mapStateToProps, null)(Results)

function mapStateToProps(state){
  return { weatherData: state.weatherData }
}

export default ResultsContainer

//
