import React from "react";

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
    }, [])
    
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
      loading,
      error
    }
  }

export {useLocalStorage}