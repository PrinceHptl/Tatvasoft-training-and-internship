import React, { Component } from 'react'

export class Eventclick extends Component {
    clickHandler(){
        console.log('clicked button')
    }
  render() {
    return (
      <div>
      <button onClick={this.clickHandler}> Click me</button>
        
      </div>
    )
  }
}

export default Eventclick
