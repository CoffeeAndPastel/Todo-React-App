import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <li className="TodoItem">
            <label className="TodoItem_checkButton">
                <input type="checkbox"/>
            </label>
            <div className={`TodoItem_task ${props.completed && 'completed'}`}>
                <p>{props.text}</p>
                <span>X</span>
            </div>
        </li>
    )
}

export {TodoItem}