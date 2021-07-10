import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Reacts from './contents/Reacts';
import Redux from './contents/Redux';
import Javascript from './contents/Javascript';
import Css from './contents/Css';
import Footer from './components/Footer';

function App() {
  const[theme, setTheme]= useState("rgb(230, 23, 71)")

  const onSwitch= ()=>{
    setTheme('rgb(33, 235, 177)')
  }
  
  return (
    <Router>
    <div className="App">
    <Navbar themes={theme} switch={onSwitch}/>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/react">
    <Reacts />
    </Route>
    <Route path="/redux">
    <Redux />
    </Route>
    <Route path="/javascript">
    <Javascript />
    </Route>
    <Route path="/css">
    <Css />
    </Route>
    <Footer themes= {theme}/>
    </div>
    </Router>
    );
  }
  
  export default App;
  