// ---------------  C O N T A C T  F O R M  C O M P O N E N T ---------------//
// Contact Form 

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// - Firebase
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
// - Styles
import { Form } from 'react-bootstrap'
import './contact-form.styles.scss'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const currentDate = new Date().toLocaleDateString();
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
  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "feedback"), {
        name: name,
        email: email,
        message: message,
        date: currentDate
      });
      //console.log("Document written with ID: ", docRef.id);
      navigate("/Soros");
      // navigate('/Soros', {replace: true});
    }
    catch (e) {
      alert("Error: ", e);
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <div id="google_translate_element">
        
      </div>
      <div className='contact-container'>
        <Form style={{ maxWidth: "400px", marginTop: "20px", marginLeft: "10px" }}>
          <h1>Contact Us</h1>
          <p>We will reply as soon as possible</p>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder='Name'
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder='Email'
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder='Message'
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              style={{ height: "150px" }}
            />
          </Form.Group>

          <button className="form-button-submit" onClick={(event) => { handleSubmit(event) }}>Submit</button>

        </Form>
      </div>
    </div>
  );
}

export default ContactForm;