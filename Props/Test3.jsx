import React from "react";
import { Component } from "react";
import { render } from 'react-dom';

class Test3 extends Component{
    render(){
        return (
            <>
            <h1>{this.props.data} </h1>
            </>
        )
    }
}

export default Test3