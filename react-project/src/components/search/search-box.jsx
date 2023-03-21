import React from 'react';
import { Component } from "react";
import "./search-box.styles.scss"
//search box componenet that will monitor change in user's search string
const SearchBox = props => {

    return (
        <div className="search-wrapper">
            {/* <Form>
            <Form.Control className="search-search-bar" type="search" placeholder="Search Company" onChange={props.onChangeHandler} />
            </Form> */}
        </div>
    )
}

export default SearchBox;