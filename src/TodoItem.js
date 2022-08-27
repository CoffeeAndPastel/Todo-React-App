import React from "react";
import './TodoItem.css'

function TodoItem(props){
    const onClomplete = () => {
        alert('You complete ✔ the trask: ' + props.text)
    }
    const onDelete = () => {
        alert('You delete 🗑 the trask: ' + props.text)
    }

    return(
        <li className="TodoItem">
            <span 
                className={`TodoItem_checkButton ${props.completed && 'completed'}`}
                onClick={onClomplete}
            ><div></div></span>
            <div 
                className={`TodoItem_task ${props.completed && 'completed'}`}
                onClick={onDelete}
            >
                <p>{props.text}</p>
                <span>X</span>
            </div>
        </li>
    )
}

export {TodoItem}