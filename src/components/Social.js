import React, { Component } from 'react';
import {linkedin, github, instagram, hackerrank, hackerearth, mail, name} from '../variable'

class Social extends Component {
    render() {
        return (
            <div className = "footer">
                <nav>
                    <ul>
                        <a href={hackerrank ? hackerrank : hackerearth} target="_blank" rel="noopener noreferrer" ><i className="fab fa-hackerrank" ></i></a>
                        <a href={github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href={instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href={mail} target="_blank" rel="noopener noreferrer"><i className="fa fa-google"></i></a>           
                    </ul>
                </nav>
                <h4>Designed By : {name}</h4>
            </div>
            )
        }
    }
    
export default Social
    