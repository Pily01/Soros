// ---------------  N O T  F O U N D  C O M P O N E N T ---------------//
// Component to display when 404 ERROR

import React from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// - Styles
import { Container } from 'react-bootstrap';
import "./NotFound.styles.scss"

const NotFound = () => {
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
    <Container className="PageContainer">
        <h1>404</h1>
        <h2 id="mainWriting">Page Not Found</h2>
        <p id="description">Something went wrong! Please return to home page.</p>
        <Link className="home-link" to='/Soros'>Go to Home </Link>
    </Container>
    </div>
  );
}

export default NotFound;