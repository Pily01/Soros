import {Routes, Route} from 'react-router-dom'

import './App.css';


import Home from './routes/home/home.component';
import Company from './components/company/company.component';
import FormInput from './components/form-input/form-input.component'
import FormManager from './components/form-sections/form-manager.component';
import About from './components/about/about.component';
import Resources from './components/resources/resources.component';

const App = () => {
  return (
    <Routes>
      <Route path='/Soros' element={<Home/>}/>
      <Route path='/Soros/about' element={<About/>}/>
      <Route path='/Soros/companies/:name' element={<Company/>}/>
      <Route path='/Soros/form/:name' element={<FormInput/>}/>
      <Route path='/Soros/form-manager' element={<FormManager/>}/>
      <Route path='/Soros/form' element={<FormInput/>}/>
      <Route path='/Soros/resources' element={<Resources/>}/>

    </Routes>
    
  );

}
export default App;