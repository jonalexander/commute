import React, { Component } from 'react';

export default class ResultRow extends Component {
  render() {

  const resultRow = {
    display: 'table-row',
    width: '75%',
    border: '1px'
  }

  const resultCell = {
    display: 'table-cell',
    width: '25%',
    textAlign: 'center',
    textVerical: 'top'
  }

    return(
      <div style={ resultRow }>
        <div style={ resultCell }>
          <h3> { String(this.props.type) } </h3>
        </div>
        <div style={ resultCell }>
          { this.props.info.normal.F }
          <br/>
          Normal
        </div>
        <div style={ resultCell }>
          { this.props.info.record.F }
          <br/>
          Record
        </div>
        <div style={ resultCell }>
          { this.props.info.recordyear }
          <br/>
          Record Year
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
