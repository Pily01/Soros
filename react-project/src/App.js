import {Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './routes/home/home.component';
import Company from './components/company/company.component';
import FormInput from './components/form-input/form-input.component'

const App = () => {
  return (
    <Routes>
      <Route path='/Soros' element={<Home/>}/>
      <Route path='/Soros/companies/:name' element={<Company/>}/>
      <Route path='/Soros/form' element={<FormInput/>}/>
    </Routes>
    
  );


};
export default App;