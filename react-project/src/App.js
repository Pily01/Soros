import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom';
import './App.css';

import Home from './routes/home/home.component';
import Company from './components/company/company.component';
import FormInput from './components/form-input/form-input.component'
import { useEffect } from "react";
const App = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
     
      <div id="google_translate_element"></div>
      <BrowserRouter>
        <Routes>
          <Route path='/Soros' element={<Home/>}/>
          <Route path='/Soros/companies/:name' element={<Company/>}/>
          <Route path='/Soros/form' element={<FormInput/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
} //should there be a semicolon here
export default App;