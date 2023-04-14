import React from 'react';

import NavbarComponent from '../../navbar/navbar.component';

import './Form-beginnig.styles.scss'

const FormBeginning = () => {
    return (
        <div>
            <NavbarComponent/>
            <div className='beginning-container'>
            <h1>Your privacy is our priority.</h1>
            <p>The following form will not ask for any self-identifying information about <br/> 
            yourself. Please answer the questions to the best of your ability.</p>
            <a href='/Soros/multi-form'><button> Start Safety Report Form </button></a>
            <a className='link' href=''>What is this form?</a>
        </div>
        </div>
        
    );
}

export default FormBeginning;
