import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./notFoundPage.styles.scss"

function NotFoundPage() {
  return (
        <div className="PageContainer">
          <Container>
              <h1 className="main">Soros</h1>
              <h2>404</h2>
              <p id="mainWriting">Page Not Found</p>
              <p id="description">Please return to home page</p>
              <Link to='/Soros'>Go to Home </Link>
          </Container>
        </div>
        );
    }

export default NotFoundPage;