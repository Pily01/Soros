import { Form } from 'react-bootstrap';

import FormWrapper from './form-wrapper.component';

const FormRating = () => {
    return (
        <FormWrapper progress={40}>
            {/* General  Rating*/}
            <Form.Group className="mb-3" controlId="formGeneralRating">
                <Form.Label>On a scale from 1 to 5, how would you rate this company? *</Form.Label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline type={type} label= '1' name="rating" value="1" required 
                        />
                        <Form.Check inline type={type} label= '2' name="rating" value="2" required
                        />
                        <Form.Check inline type={type} label= '3' name="rating" value="3" required
                        />
                        <Form.Check inline type={type} label= '4' name="rating" value="4" required
                        />
                        <Form.Check inline type={type} label= '5' name="rating" value="5" required
                        />
                    </div>
                ))}
            </Form.Group >

            {/* Safety  */}
            <Form.Group className="mb-3" controlId="formSafety">
                <Form.Label>2. How safe do you feel at work? *</Form.Label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline type={type} label= 'Not safe at all' name="safe" required
                        value = "not safe"
                        />
                        <Form.Check inline type={type} label= 'Moderately safe' name="safe" required
                        value = "moderately safe"
                        
                        />
                        <Form.Check inline type={type} label= 'Completely safe' name="safe" required
                        value ="super safe"
    
                        />
                    </div>
                ))}
            </Form.Group >
        </FormWrapper>
    )
}

export default FormRating;