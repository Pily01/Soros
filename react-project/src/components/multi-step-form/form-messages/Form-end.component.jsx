// ---------------  F O R M  E N D  C O M P O N E N T ---------------//
// Component to display after user starts safety report form
import React, {useEffect, useRef} from 'react';
// - Styles
import './Form-beginnig.styles.scss'
// - Other
import begginingImg from '../../../form-beginning-img.png'

const FormEnd = () => {
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
  // Google translate use Effect
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
            <h1>Thank you for making a difference.</h1>
            <p>We have successfully received your response. Your<br/>review will be up in one to two days.</p>
            <a href='/Soros'><button> Back to Home </button></a>
        </div>
    </div>
  )
}

export default FormEnd;