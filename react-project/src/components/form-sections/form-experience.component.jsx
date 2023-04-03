import { Form } from 'react-bootstrap';
import FormWrapper from './form-wrapper.component';

const FormExperience = () => {
    return(
        <FormWrapper progress={60}>
            {/* Experience */}
            <Form.Group className="mb-3" controlId="experience">
                <Form.Label>Have you experienced any form of sexual harassment at this workplace?</Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Yes' name="experience" 
                        value="Yes" 
                        />
                        <Form.Check type={type} label= 'No' name="experience" 
                        value="No"
                        />
                    </div>
                ))}
            </Form.Group >

            {/* Frequency */}
            <Form.Group className="mb-3" controlId="frequency">
                <Form.Label>If yes, how frequent was the harassment? </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Rare' name="frequent"
                        value="rarely" 
                        />
                        <Form.Check type={type} label= 'Often' name="frequent" 
                        value="often"
                        />
                        <Form.Check type={type} label= 'Very frequent' name="frequent" 
                        value="very often"
                        />
                    </div>
                ))}
            </Form.Group>
        </FormWrapper>
    )
}

export default FormExperience;