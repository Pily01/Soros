import React from 'react';

import './Form-beginnig.styles.scss'

const FormBeginning = () => {
    return (
        <div className='beginning-container'>
            <h1>Your privacy is our priority.</h1>
            <p>The following form will not ask for any self-identifying information about <br/> 
            yourself. Please answer the questions to the best of your ability.</p>
            <button> Start Safety Report Form </button>
            <a className='link' href='/form'>What is this form?</a>
        </div>
    );
}

export default FormBeginning;
