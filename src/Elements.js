import React from "react";


export default function Elements(props) {
    return (
        <div className={props.class} id={props.id} onClick={()=>props.handleClick(props.value)}>{props.value}</div>
    ) 
}