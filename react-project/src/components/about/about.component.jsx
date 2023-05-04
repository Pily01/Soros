import { Container, Row, Col } from 'react-bootstrap';
import './about.styles.scss'
import sorosAboutImg from '../../soros-about.png'


function About() {
return (
        <Container className='about-container'>
            <Row>
            <Col  className="image-col" sm={5}>
                <img
                    width="380px"
                    src={sorosAboutImg}
                />
            </Col>
            <Col sm={7}>
                <h1>About Us</h1>
                <p>
                We are the SafeCrew team, and we are thrilled to have created this web app - Soros. Our team leader is from Mexico City and came up with the idea for the app. After witnessing the 
                prevalence of sexual harassment and assault in Mexican workplaces through her family, friends, and acquaintances,
                she knew that something had to be done.
                </p>
                <p>
                After an extended period of brainstorming and conceptual development, and numerous meetings with professionals in
                product development, cybersecurity, and UI/UX, our team was able to perfect the final product. The Soros platform
                is designed to empower women by providing them with crucial knowledge about the frequency of sexual harassment and 
                assault in workplaces in Maxico City. By doing so, we aim to hold companies accountable for allowing such behavior to persist.
                </p>
                <p>
                With Soros, women can now compare workplaces before applying for a job, and those who have experienced sexual harassment or 
                assault can share their truth without fear of exposure. Our app is completely anonymous, and we do not store any user data.
                </p>
                <p>
                Thank you for choosing Soros, the platform that empowers women and holds companies accountable.
                </p>
            </Col>
        </Row>
        </Container>
    );
}

export default About;