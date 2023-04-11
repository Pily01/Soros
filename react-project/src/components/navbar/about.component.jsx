import NavbarComponent from '../../components/navbar/navbar.component';
import teampic from './team-pic.JPG' 
import { Container } from 'react-bootstrap';
import './about.styles.scss'




//still have to edit the formatting after figure out how to get it to show 
//up on the screen
function About() {
return (
    <div className= "entire_page">
    <NavbarComponent/>
    <Container>
        <br></br>
        <div class="d-flex justify-content-center ">
          <img className="team_picture"
          width="550"
          height="400"
          alt="React Bootstrap logo"
          src={teampic}/> 
        </div>
        <br></br>

        <div className="under_pic"> From left to right: Azamat Khan, María del Pilar Domínguez Molina, Hanna Hong, Tara Sarli </div>
            <div className="main_writing">
                <br></br>
                Hello there! 
                <br></br>
                <br></br>
                We are the SafeCrew team, and we are thrilled to have created this web app - Soros. Our team leader, 
                María del Pilar Domínguez Molina, is from Mexico City and came up with the idea for the app. After witnessing the 
                prevalence of sexual harassment and assault in Mexican workplaces through her family, friends, and acquaintances,
                she knew that something had to be done.
                <br></br>
                <br></br>
                After an extended period of brainstorming and conceptual development, and numerous meetings with professionals in
                product development, cybersecurity, and UI/UX, our team was able to perfect the final product. The Soros platform
                is designed to empower women by providing them with crucial knowledge about the frequency of sexual harassment and 
                assault in workplaces in Maxico City. By doing so, we aim to hold companies accountable for allowing such behavior to persist.
                <br></br>
                <br></br>
                With Soros, women can now compare workplaces before applying for a job, and those who have experienced sexual harassment or 
                assault can share their truth without fear of exposure. Our app is completely anonymous, and we do not store any user data.
                <br></br>
                <br></br>
                Thank you for choosing Soros, the platform that empowers women and holds companies accountable.
            </div> 
    </Container>
</div>
    );
}

export default About;