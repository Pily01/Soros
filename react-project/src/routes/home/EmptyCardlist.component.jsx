// ---------------  E M P T Y  C A R D - L I S T  C O M P O N E N T ---------------//
// Component that displays when a user does not find a company

import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
// - Styles
import "./EmptyCardlist.styles.scss"

const EmptyCardlist = () => {
    return(
        <Card className="text-center empty-cardlist">
            <Card.Body>
              <Card.Title>Don't see the company you are looking for?</Card.Title>
              <Card.Text>
                Be the first one to rate your company!
              </Card.Text>
              <Link to="/Soros/form" className="empty-card-link">Add company</Link>
            </Card.Body>
            <Card.Footer className="text-muted empty-cardlist-footer">
                “Scared is what you're feeling. 
                Brave is what you're doing.” ― Emma Donoghue, Room
            </Card.Footer>
        </Card>
    )
}

export default EmptyCardlist