import React, { Component } from 'react';

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
    event.preventDefault()
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
