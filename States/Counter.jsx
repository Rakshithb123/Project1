import React, { Component } from "react";
import './Counter.css'


class Counter extends Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})

    }

    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }

    handleReset=()=>{
        this.setState({count:0})
    }

    render()
    {
        return (
            <div className="parent">
                <h1>{this.state.count}</h1>
                <div className="child">
                <button onClick={this.handleIncrement}>+ Increment</button>
                <button onClick={this.handleDecrement}>- Decrement</button>
                <button onClick={this.handleReset}>RESET</button>
                </div>
            </div>
        )
    }
}

export default Counter