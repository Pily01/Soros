import { Form } from 'react-bootstrap';

const FormReport = () => {
    return(
        <div>
            {/* Reported */}
            <Form.Group className="mb-3" controlId="reported">
                <Form.Label>If you have experienced or witnessed any harassment, did you report it to someone in the company? </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Yes' name="reported" 
                        value="Yes" 
                        />
                        <Form.Check type={type} label= 'No' name="reported" 
                        value="No"
                        />
                    </div>
                ))}
            </Form.Group>

            {/* Support */}
            <Form.Group className="mb-3" controlId="support">
                <Form.Label>If yes, did the company do anything about it?</Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Yes' name="support" 
                        value="Yes" 
                        />
                        <Form.Check type={type} label= 'No' name="support"
                        value="No"
                        />
                    </div>
                ))}
            </Form.Group>
        </div>
    )
}
export default FormReport;