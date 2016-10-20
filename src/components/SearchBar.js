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
      border: '2px solid red',
      borderRadius: '4px'
    }

    var buttonStyle = {
      borderRadius: '8px',
      backgroundColor: 'blue',
      color: 'white'
    }

    return(
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <label>City, State</label>
          <input style={ inputStyle } type="text" id="city-name" placeholder="Enter City & State" onChange={this.updateState.bind(this)} />
          <button style={ buttonStyle } type="submit"> Submit </button>
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
