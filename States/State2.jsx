import React from "react";
import { Component } from "react";

class State2 extends Component{
    state={
        subject:"java",
        skills:["core java","JDBC","spring"]
    }
    render(){
        return(
            <>
            <h1>{this.state.subject}</h1>
            <ul>
                {this.state.skills.map((x)=>{
                       return <li>{x}</li>
                })}
            </ul>
            </>
        )
    }
}

export default State2