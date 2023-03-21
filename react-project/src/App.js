import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom';
import './App.css';

import Home from './routes/home/home.component';
import Company from './components/company/company.component';
import FormInput from './components/form-input/form-input.component'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Soros' element={<Home/>}/>
      <Route path='/Soros/companies/:name' element={<Company/>}/>
      <Route path='/Soros/form' element={<FormInput/>}/>
    </Routes>
    </BrowserRouter>
    
  );

}
export default App;