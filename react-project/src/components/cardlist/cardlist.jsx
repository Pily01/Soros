import { Link } from 'react-router-dom'

//cardlist componenet that will display all relevent search results
const CardList = props => {

    return (
        <div className="search-wrapper">
            {props.filteredList.map(company => {
                return (
                    <Link to={`companies/${company.name}`}><h3>{company.name}</h3></Link>
                )
            })}

        </div>
    )
}

export default CardList;