import React, { Component } from 'react';
// import Social from './Social';
import {mail, contact, address} from '../variable'

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
                                    <span>Adress</span>    
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
                                    <a href="https://www.hackerrank.com/kevinoberoy98?hr_r=1" target="_blank" rel="noopener noreferrer" ><i className="fab fa-hackerrank" ></i></a>
                                    </li>
                                    
                                    <li>
                                    <a href="https://github.com/aks318" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    </li>
                                        
                                    <li>
                                    <a href="https://Instagram.com/aksthetic311" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    
                                    <li>
                                    <a href="https://www.linkedin.com/in/aakash333" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                        
                                    <li>
                                    <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google"></i></a>
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
    