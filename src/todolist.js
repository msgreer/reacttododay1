import React, { Component } from 'react'

export default class ToDoList extends Component {
  
  
  render() {
    return (
      <div>

      <div>To-Do List
      <li>You have {this.props.post_num} to-do items.</li>

      </div>
      </div>
    )
  }
}
