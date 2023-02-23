import React from "react";

export default function DisplayTask(props){
    function handleClick(){
        props.onDelete(props.taskProp.task)
    }
    return <div className="taskArea">
        <h1> {props.taskProp.task}</h1>
        <button onClick={handleClick}><img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" width={20} height={20}></img></button>
    </div>
}