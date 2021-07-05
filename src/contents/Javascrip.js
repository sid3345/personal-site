import React, { Component } from 'react'
import Axios from "axios";

class Javascript extends Component {
   state = {
    content: '',
    };

    async componentDidMount() {
        let para = await Axios.get(
      'https://baconipsum.com/api/?type=all-meat&paras=3&format=text'
    );

    this.setState({
      content: para.data,
    });
    }
    render() {
        return (
            <div className="condiv skills">
                {this.state.content}
            </div>
            )
        }
    }
    
    export default Javascript
    