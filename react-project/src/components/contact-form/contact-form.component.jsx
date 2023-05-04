import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

import './contact-form.styles.scss'

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const currentDate = new Date().toLocaleDateString();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "feedback"), {
        name: name,
        email: email,
        message: message,
        date: currentDate
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/Soros");
      // navigate('/Soros', {replace: true});
    }
    catch (e) {
      alert("Error: ", e);
      console.error("Error adding document: ", e);
    }
  }

  return (
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
  );
}

export default ContactForm;