import { Form } from 'react-bootstrap';

const FormExperience = () => {
    return(
        <Form>
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
        </Form>
    )
}

export default FormExperience;