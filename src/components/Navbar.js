import React, { Component } from 'react';
import Navitem from './Navitem';
import Switch from "react-switch";

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':'',
            checked: false
        }
    }

    mode = (checked) => {
        this.setState({checked});
    }

    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav style= {this.state.checked ? {background: "rgb(153, 204, 255)"}: {background: "rgb(102, 153, 0)"}}>
            <Switch onColor='#000000' checkedIcon={false} uncheckedIcon={false} onChange={this.mode} checked={this.state.checked} />
            <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="React" tolink="/react"  activec={this.activeitem}></Navitem>
            <Navitem item="Redux" tolink="/redux"  activec={this.activeitem}></Navitem>
            <Navitem item="Javascript" tolink="/javascript"  activec={this.activeitem}></Navitem>
            <Navitem item="CSS" tolink="/css"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    