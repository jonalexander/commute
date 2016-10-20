import React, { Component } from 'react';
import ResultRow from './ResultRow';
import { connect } from 'react-redux'

class Results extends Component {

  displayRows() {
    debugger
    if ( Object.keys(this.props.weatherData.weatherData).length >= 1 ){
      return <ResultRow type={'high'} info={this.props.weatherData.weatherData.almanac.temp_high} />
    }
  }

  render() {
    return(
      <div>
        <div> { this.displayRows() } </div>
      </div>
    )
  }
}

const ResultsContainer = connect(mapStateToProps, null)(Results)

function mapStateToProps(state){
  return { weatherData: state.weatherData }
}

export default ResultsContainer

//
