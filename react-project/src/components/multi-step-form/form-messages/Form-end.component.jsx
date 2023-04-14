import React from 'react';

import NavbarComponent from '../../navbar/navbar.component';
import './Form-beginnig.styles.scss'

const FormEnd = () => {
  return (
    <div>
        <NavbarComponent/>
            <div className='beginning-container'>
                <h1>Thank you for making a difference.</h1>
                <p>We have successfully received your response. Your<br/>review will be up in one to two days.</p>
                <a href='/Soros'><button> Back to Home </button></a>
            </div>
    </div>
  )
}

export default FormEnd;