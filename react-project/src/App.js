import {Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './routes/home/home.component';
import Company from './components/cardlist/company/company.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/companies/:name' element={<Company/>}/>
    </Routes>
    
  );

}
export default App;