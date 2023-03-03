import { Link } from 'react-router-dom'
import './cardlist.styles.scss'
import companyimg from '../../company.png'

import { Card, Button, Container } from 'react-bootstrap'

//cardlist componenet that will display all relevent search results
const CardList = props => {

    return (
        <div>
            <Container className="search-wrapper">
               {props.filteredList.map(company => {
                return (
                        <Card className = "cardlist-card" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={companyimg}/>
                            <Card.Body>
                                <Card.Title>{company.name}</Card.Title>
                                <Card.Text>
                                    {company.location}
                                </Card.Text>
                                <Link className = "cardlist-link" to={`companies/${company.name}`}>
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