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
                            <Card.Img className="card-image" variant="top" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'}/>
                            <Card.Body>
                                <Card.Title>{company.companyName}</Card.Title>
                                <Card.Text>
                                    {company.address} Reviews
                                </Card.Text>
                                <Link className = "cardlist-link" to={`companies/${company.companyName}`}>
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