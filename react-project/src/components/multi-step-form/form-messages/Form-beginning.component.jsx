// ---------------  F O R M  B E G I N N I N G  C O M P O N E N T ---------------//
// Component to display before user starts safety report form

import React, {useRef, useEffect} from 'react';
// - Styles
import begginingImg from '../../../form-beginning-img.png'
import './Form-beginnig.styles.scss'

const FormBeginning = () => {
    const effectRef = useRef(false);
    // Google translate element
    const googleTranslateElementInit = (callback) => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: "en,es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
      if (typeof callback === 'function') {
        callback();
      }
    };
    // Google translate use effect
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
    
    return (
        <div>
            <div id="google_translate_element">
          </div>
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
