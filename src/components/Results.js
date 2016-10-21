import React, { Component } from 'react';
import ResultRow from './ResultRow';
import { connect } from 'react-redux'

var resultsStyle = {
  width: '30em',
  margin: 'auto',
  color: 'white'

}


class Results extends Component {
  displayRows() {
    if ( Object.keys(this.props.weatherData.weatherData).length >= 1 ){



      return (
        <div style={ resultsStyle }>
          <h2> {this.props.weatherData.weatherData.almanac.loc} </h2>
          <ResultRow type={'High'} info={this.props.weatherData.weatherData.almanac.temp_high} />
          <ResultRow type={'Low'} info={this.props.weatherData.weatherData.almanac.temp_low} />
        </div>
      )
    }
  }

  render() {



    return(
      <div>
        { this.displayRows() }
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
