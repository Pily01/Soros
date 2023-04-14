import NavbarComponent from '../navbar/navbar.component';
import { Container } from 'react-bootstrap';
import './resources.styles.scss'


function About() {
return (
    <div className= "entire_page">
    <NavbarComponent/>
    <Container>
        <div className="heading">
            Resources
        </div>

        <br></br>

        <div className="intro_message">
            You are supported. Please refer to these sources to speak to someone.
        </div>

        <br></br>

        <div className="subheading">
            Procuraduría Federal de Defensa del Trabajo (PROFEDET) 
        </div>

        <br></br>

        <div className="body">
            51-34-98-00 o a la línea telefónica del INMUJERES “Vida sin violencia.”
            <br></br> 
            01-800-911-25-11 
        </div>

        <br></br>

        <div className="subheading">
            La Red Nacional de Violación, Abuso e Incesto (RAINN) 
        </div>

        <br></br>
        
        <div className="body">
            es una línea de crisis que provee ayuda gratuita, confidencial y está 
            <br></br>
            abierta las 24 horas del día. 
            <br></br> 
            1-800-656-HOPE (4673)
        </div>
        
    </Container>
    </div>
    );
}

export default About;