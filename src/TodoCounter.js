import React from "react";
import './TodoCounter.css';
import perfil from './perfil.jpg';

function TodoCounter(){
    return(
      <header className="TodoCounter">
        <div className="TodoCounter_data">
          <p>You are amazing ✨</p>
          <img src={perfil}/>
        </div>
        <div className="TodoCounter_bar">
          <p>1/3</p>
        </div>
      </header>
    );
}

export  {TodoCounter};