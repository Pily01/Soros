import { useParams } from "react-router-dom"
const Company = () => {
    const {name} = useParams();

    return(
        <div> 
            <h1> Company: {name}</h1>
        </div>
    )
}

export default Company