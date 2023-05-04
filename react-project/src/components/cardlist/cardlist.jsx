import { Link } from 'react-router-dom'
import './cardlist.styles.scss'

import { Card, Button, Container} from 'react-bootstrap'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../.././utils/firebase/firebase.utils';
import { useState, useEffect } from "react";


//cardlist componenet that will display all relevent search results
const CardList = props => {
    const [imageUrls, setImageUrls] = useState({});
    const [responses, setResponses] = useState({});

    useEffect(() => {
        const fetchImages = async (companyName) => {
            const q = query(collection(db, "companies"), where("companyName", "==", companyName));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                if (doc.data().img_src) {
                    const str = doc.data().img_src;
                    setImageUrls((prevUrls) => ({ ...prevUrls, [companyName]: str }));
                } else {
                    setImageUrls((prevUrls) => ({
                        ...prevUrls,
                        [companyName]:
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg",
                    }));
                }
            });
        };

        props.filteredList.forEach((company) => fetchImages(company.companyName));
    }, [props.filteredList]);

    useEffect(() => {
        const fetchResponses = async (companyName) => {
            const q = query(collection(db, "responses"), where("companyName", "==", companyName));
            let count = 0;

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                count++;
            });

            setResponses((prevResponses) => ({ ...prevResponses, [companyName]: count }));
        }

        props.filteredList.forEach((company) => fetchResponses(company.companyName));
    }, [])

    function cleanAddress(address) {
        const regex = /(?:México|Mexico|Ciudad de México)(, )?/gi;
        let cleanedAddress = address.replace(regex, '');
        // Remove any empty spaces between commas
        cleanedAddress = cleanedAddress.replace(/,(?=\s*,)/g, '');
        // Remove trailing comma, if present
        cleanedAddress = cleanedAddress.slice(0, -2) + ".";
      
        return cleanedAddress;
    }

    const getRating = (rating) => {
        let totalRating = 0;
        let totalVotes = 0;
        for (const [key, value] of Object.entries(rating)) {
            totalRating += parseInt(key) * parseInt(value);
            totalVotes += parseInt(value);
        }
        return totalVotes === 0 ? 0 : (totalRating / totalVotes).toFixed(1);
    }

    return (
        <div>
            <Container className="search-wrapper">
                    {props.filteredList.map(company => {
                        return (
                            <Card className="cardlist-card" style={{ width: '20rem' }}>
                                <Card.Img className="card-image" variant="top" src={imageUrls[company.companyName]} />
                                <Card.ImgOverlay style={{height: 20}}>
                                    <div style={{width: 40}}>
                                        <span className='rating-badge'>
                                        {getRating(company.rating)}
                                        </span>
                                    </div>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Title>
                                        {company.companyName} 
                                    </Card.Title>
                                    <Card.Text>
                                        {cleanAddress(company.address)}
                                    </Card.Text>
                                    <Link className="cardlist-link" to={`companies/${company.companyName}`}>
                                        <Button className='cardlist-button'>See Company</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        )
                    })}
            </Container>
        </div>
    )
}

export default CardList;