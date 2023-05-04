import React from 'react';

import begginingImg from '../../../form-beginning-img.png'
import './Form-beginnig.styles.scss'

const FormEnd = () => {
  return (
    <div>
            <div className='beginning-container'>
                <img className='form-img' src={begginingImg} alt="img" />
                <h1>Thank you for making a difference.</h1>
                <p>We have successfully received your response. Your<br/>review will be up in one to two days.</p>
                <a href='/Soros'><button> Back to Home </button></a>
            </div>
    </div>
  )
}

export default FormEnd;