import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NotFound.styles.scss"

const NotFound = () => {
  return (
          <Container className="PageContainer">
              <h1>404</h1>
              <h2 id="mainWriting">Page Not Found</h2>
              <p id="description">Something went wrong! Please return to home page.</p>
              <Link className="home-link" to='/Soros'>Go to Home </Link>
          </Container>
        );
    }

export default NotFound;