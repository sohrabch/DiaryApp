import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container';

import About from "./about"
import Home from "./home"
import NavBar from "./navbar"
import Posts from "./posts"
require('dotenv').config()
function App(props) { 
    return    <Router>
    
    <NavBar />
    <Container fixed>
    <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
      
      </Container>
     
  </Router>


 }


  

export default App

 