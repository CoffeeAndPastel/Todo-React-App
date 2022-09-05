import React from "react";
import './TodoCounter.css';
import perfil from './perfil.jpg';
import { TodoContext } from "../TodoContext";

function TodoCounter(){
  const {totalTodos,completedTodos} = React.useContext(TodoContext);

  return(
    <header className="TodoCounter">
      <div className="TodoCounter_data">
        <p>You are amazing ✨</p>
        {/* <img src={perfil}/> */}
      </div>
      <div className="TodoCounter_bar">
        <p>{completedTodos}/{totalTodos}</p>
      </div>
    </header>
  );
}

export  {TodoCounter};