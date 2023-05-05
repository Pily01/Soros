// ---------------  H O M E  C O M P O N E N T ---------------//

import {useState, useEffect, useRef} from 'react';
// - Firebase
import { collection, query,  getDocs } from "firebase/firestore";
import {db} from "../../utils/firebase/firebase.utils"
// - Components
import SearchBox from '../../components/search/search-box';
import CardList from '../../components/cardlist/cardlist';
import EmptyCardlist from './EmptyCardlist.component';
import Typewriter from 'typewriter-effect'
// - Styles
import {Container, Row, Col} from 'react-bootstrap';
import '../../App.css';
import './home.styles.scss'
// - Other
import homeimg from '../../soros-about.png'

const Home = () => {
  const [translatedStrings, setTranslatedStrings] = useState(["Report", "Review", "Rate"]);
  const [slogan, setSlogan] = useState("Creating Safer Workspaces, One Review at a Time");
  const [anon, setAnon] = useState("Anonymously")
  const [searchProp, setSearchProp] = useState("Search Company")
  const [buttonProp, setButtonProp] = useState("See company")
  const counter = useRef(1)
  const [companies, setCompanies] = useState([]);
  const [searchStr, updateSearchStr] = useState("");
  const [filtList, updateFiltList] = useState(companies);
 
  // useEffect(() => {
  //   if (language === 'es') {
  //       setTranslatedStrings(["Reporta", "Revisa", "Califica"]);
  //     } else {
  //     setTranslatedStrings(["Report", "Review", "Rate"]);
  //   }
  // }, [language]);

  // Function to update state Search string variable that is going to be updated everytime user types a character in search bar
  const onSearch = (event) => {
    var tempSearchStr = event.target.value.toLocaleLowerCase();
    updateSearchStr(tempSearchStr);
  };

  const handleTranslate = () => {
    counter.current += 1;
    if(counter.current % 2 == 0){
      setTranslatedStrings(["Reporta", "Revisa", "Califica"])
      setSlogan("Creando espacios de trabajo más seguros, una revisión a la vez")
      setAnon("Anónimamente")
      setSearchProp("Buscar Empresa")
      setButtonProp("Ver Empresa")
    }
    else{
      setTranslatedStrings(["Report", "Review", "Rate"])
      setSlogan("Creating Safer Workspaces, One Review at a Time")
      setAnon("Anonymously")
      setSearchProp("Search Company")
      setButtonProp("See Company")
    }
  }

  // Function to create a filtered list based on original one and search string
  useEffect(() => {
    const newFiltList = companies.filter(company => company.companyName.toLocaleLowerCase().includes(searchStr));
    updateFiltList(newFiltList);
  }, [searchStr]);
  // Get companies from database
  useEffect(() => {
    const fetchData = async () => {
      let temp = [];
      const q = query(collection(db, "companies"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        temp.push(doc.data());
      });
      setCompanies(temp)
      updateFiltList(temp)
    }
    fetchData()
  }, [])

  return (
    <div className='App-main-div'>
      <div className="translate">
        <button className="translate-button" onClick={() => {handleTranslate()}}>Translate</button>
      </div>
      <Container className='home-jumbotron' fluid>
        <Row className='home-jumbotron-row'>
          <Col sm={3} className='home-jumbotron-col1'>
            <div className='text-container'>
              <p      > {anon} </p>
              <div className="typewriter">
                <Typewriter
                style="display: inline"
                options={{
                  strings: translatedStrings,
                  autoStart: true,
                  loop: true,
                }}
                />
              </div>
            </div>
            <p className='slogan'>{slogan}</p>
            <SearchBox onChangeHandler={onSearch} placeholder={searchProp}/>
          </Col>
          <Col sm={3} className='home-jumbotron-col2'>
           <img className="home-img" src={homeimg} alt="home img"/>
          </Col>
        </Row>
        <Row className='home-search-bar'>
          {
            filtList.length === 0 ? 
            <EmptyCardlist/>
            :
            <CardList filteredList={filtList} button={buttonProp}/>
          }
        </Row>
      </Container>
    </div>
  );

};

export default Home;