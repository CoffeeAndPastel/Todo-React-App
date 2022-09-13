import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }  
    const onSubmit = (event) => {
        event.preventDefault();
        (newTodoValue.length) && addTodo(newTodoValue)
        setNewTodoValue("")
    }  
    return(
        <form onSubmit={onSubmit}>
            <label>
                <p>Write your new To do:</p>
                <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Watch The office 📃"
                />
            </label>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                    >
                    Add
                </button>
                <button 
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button" 
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export {TodoForm}