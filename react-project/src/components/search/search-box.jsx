import { Component } from "react";
import "./search-box.styles.scss"

import { Form, InputGroup } from 'react-bootstrap'

//search box componenet that will monitor change in user's search string
const SearchBox = props => {

    return (
        <Form>
            <InputGroup className="mb-3 input-group-search">
                 <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                <Form.Control 
                className="search-search-bar"
                aria-describedby="basic-addon1"
                type="search" 
                placeholder="Search Company" 
                onChange={props.onChangeHandler} />
            </InputGroup>
        </Form>
    )
}

export default SearchBox;