import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import About from "./about"
import Home from "./home"
import NavBar from "./navbar"
import Posts from "./posts"
import CarSearch from './carsearch';
require('dotenv').config()
function App(props) { 
    return    <Router>
    
    {/* <NavBar /> */}
    <Container fixed>
    <Route exact path="/" component={CarSearch} /> {/* change to Home */}
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
      <Route path="/carsearch" component={CarSearch}/>
      </Container>
     
  </Router>


 }


  

export default App

 