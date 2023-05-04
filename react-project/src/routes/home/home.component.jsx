import '../../App.css';
import './home.styles.scss'
import homeimg from '../../soros-about.png'

import SearchBox from '../../components/search/search-box';
import CardList from '../../components/cardlist/cardlist';
import EmptyCardlist from './EmptyCardlist.component';

import {useState, useEffect} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import Typewriter from 'typewriter-effect'


import { collection, query,  getDocs } from "firebase/firestore";
import {db} from "../../utils/firebase/firebase.utils"


const Home = () => {
  //const companies = companies_list;
  const [companies, setCompanies] = useState([]);
  const [searchStr, updateSearchStr] = useState("");
  const [filtList, updateFiltList] = useState(companies);
 
//function to update state Search string variable that is going to be updated everytime user types a character in search bar
  const onSearch = (event) => {
    var tempSearchStr = event.target.value.toLocaleLowerCase();
    updateSearchStr(tempSearchStr);
  };

//function to create a filtered list based on original one and search string

  useEffect(() => {
    const newFiltList = companies.filter(company => company.companyName.toLocaleLowerCase().includes(searchStr));
    console.log(newFiltList);
    updateFiltList(newFiltList);
  }, [searchStr]);

  useEffect(() => {
    const fetchData = async () => {
      let temp = [];
      const q = query(collection(db, "companies"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        temp.push(doc.data());
      });

      console.log(temp)
      setCompanies(temp)
      updateFiltList(temp)
    }

    fetchData()
  }, [])

  return (
    <div className='App-main-div'>
      <Container className='home-jumbotron' fluid>
        <Row >
          <Col sm={8} className='home-jumbotron-col1'>
            {/* <p>Together, we can make workplaces in Mexico City safer.</p>
            <h1> Prevent, report, and check <br/>anonymously</h1> */}
            <div className='text-container'>
              <p> Anonymously </p>
              <div className="typewriter">
                <Typewriter
                style="display: inline"
                options={{
                  strings: ["Report", "Review", "Rate"],
                  autoStart: true,
                  loop: true,
                }}
                />
              </div>
            </div>
            <p className='slogan'>Creating Safer Workspaces, One Review at a Time</p>
            <SearchBox onChangeHandler={onSearch}/>
          </Col>
          <Col sm={4} className='home-jumbotron-col2'>
           <img className="home-img" src={homeimg} alt="home img"/>
          </Col>
        </Row>
        <Row className='home-search-bar'>
          {
            filtList.length === 0 ? 
            <EmptyCardlist/>
            :
            <CardList filteredList={filtList}/>
          }
          
        </Row>
      </Container>
    </div>
  );

};

export default Home;