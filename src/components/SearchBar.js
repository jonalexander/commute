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
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>City</label>
          <input type="text" id="city-name" placeholder="Enter City" onChange={this.updateState.bind(this)} />
          <button type="submit"> Submit </button>
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
