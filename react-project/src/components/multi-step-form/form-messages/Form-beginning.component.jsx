import React from 'react';

import NavbarComponent from '../../navbar/navbar.component';
import begginingImg from '../../../form-beginning-img.png'

import './Form-beginnig.styles.scss'

const FormBeginning = () => {
    return (
        <div>
            <div className='beginning-container'>
                <img className='form-img' src={begginingImg} alt="img" />
                <h1>Your privacy is our priority.</h1>
                <p><i class="fa-regular fa-clock"></i> 2 - 5 min <i class="fa-regular fa-circle-question"></i> 9 questions <i class="fa-solid fa-user-secret"></i> 100% anonymous</p>
                <p>The following form will not ask for any self-identifying information about <br/> 
                yourself. Please answer the questions to the best of your ability.</p>
                <a href='/Soros/multi-form'><button> Start Safety Report Form </button></a>
                <a className='link' href=''>What is this form?</a>
            </div>
        </div>
        
    );
}

export default FormBeginning;
