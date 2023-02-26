import '../../App.css';
import SearchBox from '../../components/search/search-box';
import CardList from '../../components/cardlist/cardlist';
import {useState, useEffect} from 'react';

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
      <h1> Find a company </h1>
      <SearchBox onChangeHandler={onSearch}/>
      <CardList filteredList={filtList}/>
    </div>
  );

}

export default Home;