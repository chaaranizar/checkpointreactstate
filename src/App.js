import React, { Component } from 'react'
import Profile from './Components/Profile'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show : false};
  }
  toggle = () => {
    this.setState({show : !this.state.show})
  }
  render() {
    return (
      <div className='App'>
        <button onClick={this.toggle}>Show/Hide</button>
        {this.state.show && <Profile/>}
      </div>
    )
  }
}

