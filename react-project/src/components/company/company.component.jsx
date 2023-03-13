import { useParams } from "react-router-dom"
import companies_list from "../../data/companies";


const Company = () => {
    const {name} = useParams();
    console.log(useParams())

    const foundCompany = companies_list.find(company => company.name === name)

    return(
        <div> 
            <h1> {foundCompany.name}</h1>
            <h2> {foundCompany.rating} / 5 </h2>
            <p> {foundCompany.location} total reviews</p> 
        </div>
    )
}

export default Company