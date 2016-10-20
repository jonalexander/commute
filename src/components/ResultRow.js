import React, { Component } from 'react';

export default class ResultRow extends Component {
  render() {

debugger
    return(
      <div className="result-row">
        <div className="result-cell">
          <h3> { String(this.props.type) } </h3>
        </div>
        <div className="result-cell">
          Normal: { this.props.info.normal.F }
        </div>
        <div className="result-cell">
          Record: { this.props.info.record.F }
        </div>
        <div className="result-cell">
          Record Year: { this.props.info.recordyear }
        </div>
      </div>
    )
  }
}

//
// "response": {
// "version": "0.1",
// "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
// "features": {
// "almanac": 1
// }
// },
// "almanac": {
// "airport_code": "KSFO",
// "temp_high": {
// "normal": {
// "F": "71",
// "C": "22"
// },
// "record": {
// "F": "89",
// "C": "31"
// },
// "recordyear": "1970"
// },
// "temp_low": {
// "normal": {
// "F": "54",
// "C": "12"
// },
// "record": {
// "F": "48",
// "C": "8"
// },
// "recordyear": "1953"
// }
// }
// }
