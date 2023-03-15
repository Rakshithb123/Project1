import React from "react";
import { Component } from "react";

class State1 extends Component{

    constructor()
    {
        super()
        this.state={userName:"Raj"}
    }
    render()
    {
        return (
                 <h1>{this.state.userName}</h1>
        )

        
    }
}

export default State1