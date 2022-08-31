import React from "react";
import { AppUI } from "./appUI";

const defaultTodos = [
  { text: 'Do something 😁', completed: false},
  { text: 'Do something again 😤', completed: false},
  { text: 'Watch the office 🤵', completed: false},
  { text: 'Eat popcorn 🍿', completed: false},
  { text: 'End css style 🎨', completed: false},
]

function useLocalStorage(_itemName, _initValue){
  const localStorageItem = localStorage.getItem(_itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(_itemName, JSON.stringify(_initValue));
    parsedItem = _initValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
    console.log(parsedItem);
  }
  
  const [item, setItem] = React.useState(parsedItem)
  
  const saveItem = (newItem) => {
    const stringItem = JSON.stringify(newItem);
    localStorage.setItem(_itemName,stringItem);
    setItem(newItem);
  } 

  return[item, saveItem]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[{ text: 'Be happy 😁', completed: false}]);


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
