import React, { Component } from 'react';
import {linkedin, github, instagram, hackerrank, hackerearth, mail, address , contact } from '../variable'

class Footer extends Component {
    
    render() {
        return (
            <div>
                {/* <Social /> */}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-4 col-xs-12">
                                <ul className="adress">
                                    <span>Address</span>    
                                    <li>
                                        <p>{address}</p>
                                    </li>
                                        
                                    <li>
                                        <p>{contact}</p>
                                    </li>
                                        
                                    <li>
                                        <p>{mail}</p>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <ul className="contact">
                                    <span>Contact</span>    
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                        
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                        
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                        
                                    <li>
                                        <a href="#">Gallery </a>
                                    </li>
                                        
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                    
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                <ul className="social">
                                <span>Social</span>    
                                    <li>
                                    <a href={hackerrank ? hackerrank : hackerearth} target="_blank" rel="noopener noreferrer" ><i className="fab fa-hackerrank" ></i></a>
                                    </li>
                                    
                                    <li>
                                    <a href={github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    </li>
                                        
                                    <li>
                                    <a href={instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    
                                    <li>
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                        
                                    <li>
                                    <a href={mail} target="_blank" rel="noopener noreferrer"><i className="fa fa-google"></i></a>
                                    </li>
                        
                                </ul>
                            </div>
                    </div> 
                    </div>
                </footer>
            </div>
            )
        }
    }
    
    export default Footer
    