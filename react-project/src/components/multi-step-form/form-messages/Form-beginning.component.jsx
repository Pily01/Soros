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
                <div className='icon-section'>
                    <p><i class="fa-regular fa-clock"></i> 2 - 5 min </p> 
                    <p><i class="fa-regular fa-circle-question"></i> 9 questions</p>
                    <p><i class="fa-solid fa-user-secret"></i> 100% anonymous</p>
                </div>
                <p>The following form will not ask for any self-identifying information about <br/> 
                yourself. Please answer the questions to the best of your ability.</p>
                <a href='/Soros/multi-form'><button> Start Safety Report Form </button></a>
                <a className='link' href='/Soros/resources'>What is this form?</a>
                <div className='disclaimer-section'>
                    <p><i class="fa-solid fa-triangle-exclamation"></i> This form asks optional questions about sexual assault, harassment, and other experiences that may be traumatic to some users.</p>
                </div>
            </div>
        </div>
    );
}

export default FormBeginning;
