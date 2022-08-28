import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(){
    const onClickButton = () => {
        alert('Ahhhh')
    }    

    return(
      <button 
        className="CreateTodoButton"
        onClick={onClickButton}
      >
        +
      </button>
    )
}

export {CreateTodoButton};