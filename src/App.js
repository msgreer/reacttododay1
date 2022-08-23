import './App.css';
import React, { Component } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './home.js'
import Nav from './nav'
import ToDoList from './todolist'
import background from './annie-spratt-wuc-KEIBrdE-unsplash.jpg'



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      post_num: 0
    }
  }
  
  addtPost = () => {
    this.setState({post_num: this.state.post_num + 1})
  }  

  render() {
    return (
      <BrowserRouter>
        
       <div>
        <Nav />
        <button onClick={this.addtPost}>New To-Do Item</button>


        <Routes>
          <Route path= '/' element= {<Home />}/>
          <Route path= '/todolist' element= {<ToDoList post_num={this.state.post_num}/>}/>
        </Routes>

      </div>
      </BrowserRouter>
    )
  }
}

