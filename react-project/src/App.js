import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import Home from './routes/home/home.component';
import Company from './components/company/company.component';
import Form from './components/multi-step-form/Form.component';
import FormBeginning from './components/multi-step-form/form-messages/Form-beginning.component';
import FormEnd from './components/multi-step-form/form-messages/Form-end.component';
import About from './components/about/about.component';
import Resources from './components/resources/resources.component';
import NavbarComponent from './components/navbar/navbar.component';
import NotFound from './components/error-page/NotFound.component';
import ContactForm from './components/contact-form/contact-form.component';


const App = () => {

  return (
        <div>
          <NavbarComponent/>
          <Routes>
            <Route path='/Soros' element={<Home/>}/>
            <Route path='/Soros/companies/:name' element={<Company/>}/>
            <Route path='/Soros/form' element={<FormBeginning/>}/>
            <Route path='/Soros/multi-form' element={<Form/>}/>
            <Route path='/Soros/form-end' element={<FormEnd/>}/>
            <Route path='/Soros/about' element={<About/>}/>
            <Route path='/Soros/resources' element={<Resources/>}/>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/Soros/contact-us' element={<ContactForm/>}/>
          </Routes>
        </div>
    
  );

}
export default App;