import React from "react";
import { AppUI } from "./appUI";

const defaultTodos = [
  { text: 'Do something 😁', completed: false},
  { text: 'Do something again 😤', completed: false},
  { text: 'Watch the office 🤵', completed: false},
  { text: 'Eat popcorn 🍿', completed: false},
  { text: 'End css style 🎨', completed: false},
]

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  console.log(localStorageTodos)
  let parsedTodos;

  if (!localStorageTodos) {
    const defaultItem = [{text: 'Start to write todos ☑',completed:false}];
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultItem));
    parsedTodos = defaultItem;
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText)
    })
  }

  const saveTodos = (newTodos) => {
    const stringTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringTodos);
    setTodos(newTodos);
  } 

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos)
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
