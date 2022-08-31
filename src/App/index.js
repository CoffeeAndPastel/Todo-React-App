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
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState(_initValue)

  React.useEffect(()=>{
    try{
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(_itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(_itemName, JSON.stringify(_initValue));
          parsedItem = _initValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          console.log(parsedItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }, 1000)
    }catch(e){
      setError(e);
    }
  })
  
  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(_itemName,stringItem);
      setItem(newItem);
    } catch (e) {
      setError(e);
    }
  } 

  return {
    item,
    saveItem,
    loading
  }
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1',[]);
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
      loading={loading}
      error={error}
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
