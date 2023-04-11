import React from 'react';
import '../../App.css';
import './home.styles.scss'
import homeimg from '../../soros-home.png'

import SearchBox from '../../components/search/search-box';
import CardList from '../../components/cardlist/cardlist';
import NavbarComponent from '../../components/navbar/navbar.component';
import {useState, useEffect} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


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
      <Container className='home-jumbotron' fluid>
        <Row >
          <Col sm={8} className='home-jumbotron-col1'>
            <p className="paragraph-text">Together, we can make workplaces in Mexico City safer.</p>
            <h1 className="header-text"> Prevent, report, and check <br/>anonymously.</h1>
            <SearchBox onChangeHandler={onSearch}/>
          </Col>
          <Col sm={4} className='home-jumbotron-col2'>
           <img className="home-img" src={homeimg} alt="home img"/>
          </Col>
        </Row>
        <Row className='home-search-bar'>
          <CardList filteredList={filtList}/>
        </Row>
        <nav class="nav flex-column">   
          <a class="nav-link active" href="/Soros/form">Submit a Safety Report</a>
        </nav>

          
      </Container>
    </div>
  );

};

export default Home;