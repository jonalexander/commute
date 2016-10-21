import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import stateList from '../assets/StateList'
import fetchData from '../actions/fetchData.js'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = { query: "" }
    // "boSton, MA"
  }

  updateState(event){
    this.setState( { query: event.target.value } )
    console.log(event.target.value)
  }

  handleSubmit(event){
    event.preventDefault()

    var city = this.state.query.split(',')[0][0].toUpperCase() + this.state.query.split(',')[0].slice(1).toLowerCase()
    var state = this.state.query.split(',')[1].trim().toUpperCase()
    // action creator to make API call
    this.props.fetchData(city, state)
  }

  displayInput(){

    var inputStyle = {
      display: 'block',
      border: '2px solid white',
      borderRadius: '8px',
      width: '30em',
      margin: 'auto',
      padding: '1em',
      textAlign: 'center',
      fontSize: '1em',
      color: 'white',
      fontFamily: 'Cardo',
      backgroundColor: 'rgba(123, 144, 149, 0.6)'
    }


    var searchStyle = {
      marginTop: '10em'
    }

    var formStyle = {
      margin: 'auto'
    }

    var headerStyle = {
      fontSize: '2em',
      width: '20em',
      margin: 'auto',
      paddingBottom: '.5em',
      textAlign: 'center',
      color: 'white'
    }

    return(
      <div style={ searchStyle }>
        <div style={ headerStyle }>
          Weather Almanac
        </div>
        <form style={ formStyle}
              onSubmit={ this.handleSubmit.bind(this) }
              >
            <input style={ inputStyle } type="text" id="city-name" placeholder="Enter Location eg: Boston, MA" onChange={this.updateState.bind(this)} />
        </form>
      </div>
    )
  }

  render(){
    return (
      <div>
        { this.displayInput() }
      </div>
    )
  }
}

const ConnectedSearchBar = connect(null, mapDispatchToProps)(SearchBar)

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchData }, dispatch)
}

export default ConnectedSearchBar
// mapdispatchtoprops to change state
