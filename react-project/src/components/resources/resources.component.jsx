// ---------------  F O R M  C O M P O N E N T ---------------//

import React, {useEffect, useRef} from 'react';
// - Styles
import { Container, Row, Col, Card } from 'react-bootstrap';
import './resources.styles.scss'
// - Other
import logo_PROFEDET from '../../Logo_PROFEDET.svg.png'
import logo_INMUJERES from '../../Logo_INMUJERES_Mujeres_Transformando_México.png'
import cdmx_logo from '../../cdmx.png'

const Resources = () => {
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
    <Container className='resources-container'>
        <h1>Resources</h1>
        <p>You are supported. Please refer to these sources to speak to someone, or learn more. </p>
        <Row className='row-2'>
            <Col sm={4}>
                <img
                    width="180px"
                    src={cdmx_logo}
                />
            </Col>
            <Col sm={8}>
                <p className='subtitle'>Instituto De Las Mujeres De La Ciudad de Mexico</p>
                <p>A través de las 16 unidades delegacionales, brinda atención personalizada,Psicológica y jurídica.
                </p>
                <p>Moday to Friday 9:00 - 17:00</p>
                <p>01 55 55 12 28 36 or Linea Mujeres 56 58 11 11 (24hrs)</p>
                <p>José María Izazaga 148, Centro, 06090 Cuauhtémoc, CDMX</p>
                <a className='link' href='https://www.gob.mx/cms/uploads/attachment/file/394591/Directorio_Institutos_Estatales_y_Lineas_2018.pdf'> Learn More</a>
            </Col>
        </Row>
        <Row className='row-1'>
            <Col sm={4}>
                <img 
                width="180px"
                src={logo_PROFEDET}
                />
            </Col>
            <Col sm={8}>
                <p className='subtitle'>Procuraduría Federal de Defensa del Trabajo (PROFEDET) </p>
                <p>5Llama al 1-34-98-00 o a la línea telefónica del INMUJERES “Vida sin violencia” 01-800-911-25-11</p>
                <a className='link' href='https://www.gob.mx/profedet#1946'> Learn More</a>
            </Col>
           </Row>
        <Row className='row-2'>
            <Col sm={4}>
                <img
                    width="180px"
                    src={logo_INMUJERES}
                />
            </Col>
            <Col sm={8}>
                <p className='subtitle'>Instituto Nacional De Las Mujeres (INMUJERES)</p>
                <p>General objective is to promote and foster conditions that enable non-discrimination, equality of opportunities and of treatment between the genders, the full exercise of the rights of women and their equal participation in the political, cultural, economic and social life of the country.
                </p>
                <a className='link' href='https://www.gob.mx/inmujeres/articulos/redes-de-apoyo'> Learn More</a>
            </Col>
        </Row>
        <div>
            <h3>What is the safety report form?</h3>
            <p>The Safety Report Form is a user-friendly tool designed to collect user-generated data and provide scores on the safety performance of companies. Users can rate companies on a scale of 1 to 5, with 1 indicating "unsafe" and 5 indicating "safe."</p>
            <p>The form allows users to provide feedback on various aspects of a company's safety, such as reports of harassment, type of harassment experienced, frequency of harassment, and company response. The data collected from the form is compiled to generate scores that reflect the overall safety from sexual harassment of companies, helping users make informed decisions about which companies to apply to.</p>
            <a href='/Soros/form'><button className='form-link-button'>Submit Safety Report Form</button></a>
        </div>
        <h3>Types of sexual harassment and violence</h3>
        <Row xs={1} md={2} className="g-4 types-row">
            <Col>
              <Card className='type-card'>
                <Card.Body>
                  <Card.Title className='type-title'>Verbal Harassment</Card.Title>
                  <Card.Text>
                    Unwanted and offensive sexual comments, jokes, 
                    or remarks made by someone that are directed at 
                    another person, either in person or through 
                    communication such as phone calls, texts, or emails.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='type-card'>
                <Card.Body>
                  <Card.Title className='type-title'>Physical Harassment </Card.Title>
                  <Card.Text>
                    Unwanted and non-consensual physical contact 
                    of a sexual nature, such as touching, groping, 
                    or hugging, that is directed at another person 
                    without their consent.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='type-card'>
                <Card.Body>
                  <Card.Title className='type-title'>Sexual Coercion</Card.Title>
                  <Card.Text>
                    Pressuring or forcing someone into sexual activity 
                    or behavior through threats, manipulation, or abuse 
                    of power, where the victim may feel they have no choice 
                    but to comply.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='type-card'>
                <Card.Body>
                  <Card.Title className='type-title'>Indecent Exposure</Card.Title>
                  <Card.Text>
                    Displaying one's private parts or engaging in 
                    exhibitionism in a sexual manner, either in person 
                    or through electronic means, without the consent of 
                    another person.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='type-card'>
                <Card.Body>
                  <Card.Title className='type-title'>Spiking</Card.Title>
                  <Card.Text>
                  Adding drugs or substances to someone's drink 
                  or food without their knowledge or consent with the 
                  intent to impair their judgment or ability to resist,
                  often for the purpose of facilitating sexual assault.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='type-card'>
                <Card.Body>
                  <Card.Title className='type-title'>Rape</Card.Title>
                  <Card.Text>
                    Non-consensual sexual intercourse or penetration, 
                    including vaginal, anal, or oral sex, that occurs 
                    without the explicit and informed consent of the 
                    victim.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className='type-card'>
                <Card.Body>
                  <Card.Title className='type-title'>Online Harassment</Card.Title>
                  <Card.Text>
                  Unwanted and offensive sexual behavior that occurs 
                  online or through digital communication, such as 
                  sending explicit messages, images, or videos, making 
                  sexual comments, or engaging in cyber stalking or bullying.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
    </Container>
    </div>
    );
}

export default Resources;