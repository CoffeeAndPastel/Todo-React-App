import './App.css';

import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";


const todos = [
  { text: 'Do something 😁', completed: true},
  { text: 'Do something again 😤', completed: false},
  { text: 'Watch the office 🤵', completed: false},
  { text: 'Eat popcorn 🍿', completed: false},
  { text: 'End css style 🎨', completed: true},
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
