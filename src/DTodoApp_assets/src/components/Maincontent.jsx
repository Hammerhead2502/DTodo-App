import React, { useEffect, useState } from "react";
import { DTodoApp } from "../../../declarations/DTodoApp/index";
import DisplayTask from "./DisplayTask";


export default function MainContent (){
    const[task, setTask] = useState("")
    const [taskArray, setTaskArray] = useState([])
    function timeOut(mes){
        document.querySelector("#message").innerHTML = mes;
        setTimeout(function(){
            document.getElementById("message").innerHTML = '';
        }, 3000);
    }
    async function addTask(event){
        event.preventDefault();
        let message = await DTodoApp.addTask(task);
        timeOut(message)
    }
    async function deleteTask(val){
        let del = await DTodoApp.deleteTask(val);
        timeOut(del)
    }
    async function displayTask(){
        const arr = await DTodoApp.getAllTask();
        setTaskArray(arr);
    }
    useEffect(() => {
        displayTask();
    })
    return <div className="container">
        <form>
            <input type="text" placeholder="Enter task" value={task} onChange={(event) => {
                setTask(event.target.value)
            }}></input>
            <button onClick={addTask} className="btn">Add task</button>
            <p id="message"></p>
        </form>
        {
            taskArray.map((userTask,index) => {
                return <DisplayTask taskProp={userTask} key={index} onDelete={deleteTask}/>
            })
        }
    </div>
}