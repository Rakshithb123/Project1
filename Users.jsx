import React from "react";

const Users=(props)=>{
    let data=props.data
    return(
        <div className="parent" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
            <table border="1px" style={{textAlign:"center",fontWeight:"bolder"}}>
                <caption style={{color:"red",fontSize:"30px",marginBottom:"20px"}}>ACTORS BIO</caption>
                <tr style={{color:"red"}}>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Dob</th>
                    <th>Films</th>
                    <th>Birth Place</th>
                </tr>
                {data.map((x)=>{
                    return <tr>
                            <td style={{color:"blueviolet"}}>{x.name}</td>
                            <td ><img src={x.image1} alt="" style={{height:"50px",width:"100%",cursor:"pointer"}}/></td>
                            <td>{x.title}</td>
                            <td>{x.dob}</td>
                            <td><ol>
                                {x.films.map((y)=>{
                                    return <li>{y}</li>
                                })}
                                </ol>
                            </td>
                            <td>{x.Place}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default Users