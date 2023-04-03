import { Form } from 'react-bootstrap';

import FormWrapper from './form-wrapper.component';

const FormWitness = () => {
    return (
        <FormWrapper progress={80}>
            {/* Witness */}
            <Form.Group className="mb-3" controlId="witnessed">
                <Form.Label>Have you witnessed any form of sexual harassment at this company? </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Yes' name="witnessed" 
                        value="Yes" 
                        />
                        <Form.Check type={type} label= 'No' name="witnessed" 
                        value="No"
                        />
                    </div>
                ))}
            </Form.Group>
            
            {/* Frequency */}
            <Form.Group className="mb-3" controlId="frequency">
                <Form.Label>If yes, how often did you witness the harassment? </Form.Label>
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

export default FormWitness;