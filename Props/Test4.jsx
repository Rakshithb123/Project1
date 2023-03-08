import React from "react";

const Test4=(props)=>
{
    return(
        <>
       <div>{props.data}</div>
       <div>{props.number}</div>
       <div>{props.String}</div>
       <div>{props.obj.username} {props.obj.pass} {props.obj.address}</div>
       </>
    )

}

export default Test4