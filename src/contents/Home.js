import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import {name, company, position, image} from '../variable'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src= {image} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={[`I am ${name}`,`I am a ${position} at ${company}`,]} style={ { color: 'blue'}} speed={100} eraseDelay={700}/>
            
            </div>
            )
        }
    }
    
    export default Home
    