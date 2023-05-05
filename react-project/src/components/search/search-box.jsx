// ---------------  S E A R C H  B O X  C O M P O N E N T ---------------//
// Home page search box to find companies.

// - Styles
import "./search-box.styles.scss"
import { Form, InputGroup } from 'react-bootstrap'

const SearchBox = props => {

    return (
        <Form>
            <InputGroup className="mb-3 input-group-search">
                 <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                <Form.Control 
                className="search-search-bar"
                aria-describedby="basic-addon1"
                type="search" 
                placeholder={props.placeholder} 
                onChange={props.onChangeHandler} />
            </InputGroup>
        </Form>
    )
}

export default SearchBox;