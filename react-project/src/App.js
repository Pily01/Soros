
import React from 'react';
import {Routes, Route, Switch, BrowserRouter} from 'react-router-dom';
import { useEffect, useRef } from "react";

import './App.css';

import Home from './routes/home/home.component';
import Company from './components/company/company.component';
import Form from './components/multi-step-form/Form.component';
import FormBeginning from './components/multi-step-form/form-messages/Form-beginning.component';
import FormEnd from './components/multi-step-form/form-messages/Form-end.component';
import About from './components/about/about.component';
import Resources from './components/resources/resources.component';
import NavbarComponent from './components/navbar/navbar.component';
import NotFoundPage from './components/error/notFoundPage.component'; 

const App = () => {  
  const effectRef = useRef(false);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "en,es",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const gTranslate = () => {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
    
    if(effectRef.current) return
    effectRef.current = true;
    gTranslate();
  }, []);
//</Switch> didnt work
//
  return (
    
        <div>
          <div id="google_translate_element">
          </div>
          <NavbarComponent/>
          <Routes>
              
            <Route path='/Soros' element={<Home/>}/>
            <Route path='/Soros/companies/:name' element={<Company/>}/>
            <Route path='/Soros/form' element={<FormBeginning/>}/>
            <Route path='/Soros/multi-form' element={<Form/>}/>
            <Route path='/Soros/form-end' element={<FormEnd/>}/>
            <Route path='/Soros/about' element={<About/>}/>
            <Route path='/Soros/resources' element={<Resources/>}/>
            <Route path='/*' element={<NotFoundPage/>}/>
           
            
          </Routes>
        </div>

    
    
  );

}
export default App;