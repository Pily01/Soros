import {Routes, Route} from 'react-router-dom'

import './App.css';

import Home from './routes/home/home.component';
import Company from './components/company/company.component';
import FormInput from './components/form-input/form-input.component'
import Form from './components/multi-step-form/Form.component';
import FormBeginning from './components/multi-step-form/form-messages/Form-beginning.component';

const App = () => {
  return (
    <Routes>
      <Route path='/Soros' element={<Home/>}/>
      <Route path='/Soros/companies/:name' element={<Company/>}/>
      <Route path='/Soros/form/:name' element={<Form/>}/>
      <Route path='/Soros/form' element={<FormBeginning/>}/>
      <Route path='/Soros/multi-form' element={<Form/>}/>

    </Routes>
    
  );

}
export default App;