import { useParams } from "react-router-dom"
import companies_list from "../../data/companies";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { collection, query, where, getDocs, Firestore } from "firebase/firestore";
import { db } from '../../utils/firebase/firebase.utils';


const Company = () => {
    const { name } = useParams();
    console.log(name);
    //change the url for the next redirect to form
    const href = window.location.href;
    const new_href = href.replace("companies", "form");

    const [companyData, setCompanyData] = useState([]);
    const effectRef = useRef(false);
    const tempCompanyData = []

    useEffect(() => {
        const queryGet = async () => {
            const reviewsRef = collection(db, "responses");
            const q = query(reviewsRef, where("companyName", "==", `${name}`));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data())
                tempCompanyData.push(doc.data());
            });
            setCompanyData(tempCompanyData)
            console.log(tempCompanyData)
        }
        if(effectRef.current) return
        effectRef.current = true;
        queryGet();
    }, [])

    console.log(companyData)

    const foundCompany = companies_list.find(company => company.name === name)

    return (
        <div>
            <Link className="cardlist-link" to={new_href}>
                <Button className='cardlist-button'>Report</Button>
            </Link>
            <h1> {name}</h1>
            {companyData.map(company => {
                return (
                    <div>
                        <h2>{company.rating}</h2>
                        <p>Adress: {company.address}</p>
                        <p>Company Support: {company.companySupport}</p>
                        <p>Experienced Harassment: {company.experiencedHarassment}</p>
                        <p>Frequency: {company.frequency}</p>
                        <p>Reported Harassment: {company.reportedHarassment}</p>
                        <p>Witnessed Harassment: {company.witnessedHarassment}</p>
                        <p>Safe: {company.safe}</p>
                    </div>

                )
            })}

        </div>
    )
}

export default Company