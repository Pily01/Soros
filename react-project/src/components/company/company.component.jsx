import { useParams } from "react-router-dom"
import companies_list from "../../data/companies";


const Company = () => {
    const {name} = useParams();
    console.log(useParams())

    return(
        <div> 
            <h1> Company: {name}</h1>
            <h2> 3.7 / 5 </h2>
            <h2> 60% of workers say the feel safe here </h2>
            <h3> Gender distribution: 30% women 70%</h3>
            <h3> Reported sexual abuse </h3>
            <ul>
                <li>Unwanted physical contact</li>
                <li>Text messages with sexual content</li>
                <li>Threats</li>
                <li>Comments on clothes and body</li>
            </ul>
            <h3> 74% of harassers are in a higher possition of power</h3>
            <h3>Reported Departments</h3>
            <ul>
                <li>Marketing</li>
                <li>Accounting</li>
                <li>Computer Systems</li>
            </ul>
            
        </div>
    )
}

export default Company