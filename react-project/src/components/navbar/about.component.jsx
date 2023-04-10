import { View, Text } from 'react-native';
import teampic from './team-pic.JPG' 
import { Container } from 'react-bootstrap';


//still have to edit the formatting after figure out how to get it to show 
//up on the screen
function About() {
return (
<Container>
    <View>
          <img 
          width="70"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          src={teampic}/> 

        <Text> from left to right: Azamat Khan, María del Pilar Domínguez Molina, Hanna Hong, Tara Sarli

                Hello there! 

                We are the SafeCrew team, and we are thrilled to have created this web app - Soros. Our team leader, 
                María del Pilar Domínguez Molina, is from Mexico City and came up with the idea for the app. After witnessing the 
                prevalence of sexual harassment and assault in Mexican workplaces through her family, friends, and acquaintances,
                she knew that something had to be done.

                After an extended period of brainstorming and conceptual development, and numerous meetings with professionals in
                product development, cybersecurity, and UI/UX, our team was able to perfect the final product. The Soros platform
                is designed to empower women by providing them with crucial knowledge about the frequency of sexual harassment and 
                assault in workplaces in Maxico City. By doing so, we aim to hold companies accountable for allowing such behavior to persist.

                With Soros, women can now compare workplaces before applying for a job, and those who have experienced sexual harassment or 
                assault can share their truth without fear of exposure. Our app is completely anonymous, and we do not store any user data.

                Thank you for choosing Soros, the platform that empowers women and holds companies accountable.
        </Text>
        console.log("hi")
    </View> 
</Container>
    );
}

export default About;