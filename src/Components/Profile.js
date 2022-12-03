import React, { Component } from 'react'

import './profile.css'
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.person = {
            FullName : "Nizar Chaara",
            Age : "36 ans",
            Bio : "FullStack JS Student",
            img : 'https://weassemble.team/wp-content/uploads/2022/06/Rectangle-33-6.png'
        };
        this.state = {count : 0}
        }
        componentDidMount () {
            setInterval(() => {
                this.setState(prevState => ({count : prevState.count + 1}))
            }, 1000);
      }
  render() {
    return (
      <div className='prof'>
        <div className='profile'>
        <h2> {this.person.FullName}</h2>
        <h2> {this.person.Age}</h2>
        <h2> {this.person.Bio}</h2>
        </div>
        <img className = 'mid' src = {this.person.img} alt = 'img'/>
        <p> {this.state.count}</p>
      </div>
    )
  }
}
