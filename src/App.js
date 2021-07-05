import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Reacts from './contents/Reacts';
import Redux from './contents/Redux';
import Javascript from './contents/Javascrip';
import Css from './contents/Css';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
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
    <Footer />
    </div>
    </Router>
    );
  }
  
  export default App;
  