import React, { Component } from 'react';
import stateList from '../assets/StateList'

export default class SearchBar extends Component {

  constructor() {
    super()
    this.state = { query: "" }
  }

  updateState(event){
    this.setState( { query: event.target.value } )
    console.log(event.target.value)
  }

  handleSubmit(event){
    debugger
    event.preventDefault()
    var city = event.target[0].value[0].toUpperCase() + event.target[0].value.slice(1).toLowerCase()
    var state = event.target[1].value
    console.log("Success")

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
        <form onSubmit={ this.handleSubmit }>
          <label>City</label>
          <input style={ inputStyle } type="text" id="city-name" placeholder="Enter City" onChange={this.updateState.bind(this)} />
          <label>State</label>
          <select>
              {stateList.map( (state) => {
               return (
                 <option value={state}> {state} </option>
                )
               })
              }
          </select>
          <button style= { buttonStyle } type="submit"> Submit </button>
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

// mapdispatchtoprops to change state
