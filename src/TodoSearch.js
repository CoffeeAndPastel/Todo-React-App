import React from "react";
import './TodoSearch.css'

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue)
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder='Example'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch}