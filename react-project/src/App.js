import './App.css';
import SearchBox from './components/search/search-box.jsx';
import CardList from './components/cardlist/cardlist.jsx';
import {useState, useEffect} from 'react';

const App = () => {
  const vals = ["azamat", "maria", "tara", "hannah"];
  const [searchStr, updateSearchStr] = useState("");
  const [filtList, updateFiltList] = useState(vals);
 
//function to update state Search string variable that is going to be updated everytime user types a character in search bar
  const onSearch = (event) => {
    var tempSearchStr = event.target.value.toLocaleLowerCase();
    updateSearchStr(tempSearchStr);
  };

//function to create a filtered list based on original one and search string

  useEffect(() => {
    const newFiltList = vals.filter(val => val.toLocaleLowerCase().includes(searchStr));
    console.log(newFiltList);
    updateFiltList(newFiltList);
  }, [searchStr]);

  
  return (
    <div>
      <SearchBox onChangeHandler={onSearch}/>
      <CardList filteredList={filtList}/>
    </div>
  );

}

export default App;
