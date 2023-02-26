import { Component } from "react";

//search box componenet that will monitor change in user's search string
const SearchBox = props => {

    return (
        <div className="search-wrapper">
            <input type="search" placeholder="Busca la empresa..." onChange={props.onChangeHandler}/>

        </div>
    )
}

export default SearchBox;