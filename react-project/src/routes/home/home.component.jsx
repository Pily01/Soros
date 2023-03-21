import '../../App.css';
import './home.styles.scss'
import React from 'react';
import SearchBox from '../../components/search/search-box';
import CardList from '../../components/cardlist/cardlist';
import NavbarComponent from '../../components/navbar/navbar.component';
import {useState, useEffect} from 'react';
import FormInput from "../.././components/form-input/form-input.component";

import {Button, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import companies_list from '../../data/companies';

const Home = () => {
  const companies = companies_list;
  const [searchStr, updateSearchStr] = useState("");
  const [filtList, updateFiltList] = useState(companies);
 
//function to update state Search string variable that is going to be updated everytime user types a character in search bar
  const onSearch = (event) => {
    var tempSearchStr = event.target.value.toLocaleLowerCase();
    updateSearchStr(tempSearchStr);
  };

//function to create a filtered list based on original one and search string

  useEffect(() => {
    const newFiltList = companies.filter(company => company.name.toLocaleLowerCase().includes(searchStr));
    console.log(newFiltList);
    updateFiltList(newFiltList);
  }, [searchStr]);

  
  return (
    <div className='App-main-div'>
      <NavbarComponent/>
      <Container fluid>
        <Row className='home-jumbotron'>
          <h1> SOROS</h1>
          <h3> Empowering Women: One Safe Place At A Time</h3>
        </Row>
        <Row className='home-search-bar'>
          <h1> Prevent, report, and check </h1>
          <h1> anonymously </h1>
          <SearchBox onChangeHandler={onSearch}/>
          <CardList filteredList={filtList}/>
        </Row>
      </Container>
    </div>
  );

};

export default Home;