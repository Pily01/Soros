
import NavbarComponent from '../navbar/navbar.component';
import { Container, Row, Col } from 'react-bootstrap';
import './resources.styles.scss'

import logo_PROFEDET from '../../Logo_PROFEDET.svg.png'
import logo_INMUJERES from '../../Logo_INMUJERES_Mujeres_Transformando_México.png'

function Resources() {
return (
    <Container>
        <h1>Resources</h1>
        <p>You are supported. Please refer to these sources to speak to someone, or learn more. </p>
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

        <h3>What is the safety report form?</h3>
        <p>The Safety Report Form is a user-friendly tool designed to collect user-generated data and provide scores on the safety performance of companies. Users can rate companies on a scale of 1 to 5, with 1 indicating "unsafe" and 5 indicating "safe."</p>
        <p>The form allows users to provide feedback on various aspects of a company's safety, such as reports of harassment, type of harassment experienced, frequency of harassment, and company response. The data collected from the form is compiled to generate scores that reflect the overall safety from sexual harassment of companies, helping users make informed decisions about which companies to apply to.</p>
    </Container>
    );
}

export default Resources;