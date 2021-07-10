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
            <nav style= {this.state.checked ? this.props.onSwitch : {background: this.props.themes}}>
            <Switch className = "Switch" onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48} 
            onColor='#000000' 
            checkedIcon={false} 
            uncheckedIcon={false} 
            onChange={this.mode} 
            checked={this.state.checked} />
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
    