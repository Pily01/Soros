import { Component } from "react";

//cardlist componenet that will display all relevent search results
const CardList = props => {

    return (
        <div className="search-wrapper">
            {props.filteredList.map(company => {
                return <h2>{company.name}</h2>
            })}

        </div>
    )
}

export default CardList;