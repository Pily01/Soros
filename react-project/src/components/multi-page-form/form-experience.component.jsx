import { Form } from 'react-bootstrap';

import FormContext from '../../context/form.context';

const FormExperience = () => {
    const { data, handleChange } = FormContext;

    return(
        <Form>
            {/* Experience */}
            <Form.Group className="mb-3" controlId="expereiencedHarass">
                <Form.Label>Have you experienced any form of sexual harassment at this workplace?</Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                        type={type} 
                        label= 'Yes' 
                        name="expereiencedHarass" 
                        value="Yes"
                        onChange={handleChange}
                        checked={data.experiencedHarass}
                        />
                        <Form.Check 
                        type={type} 
                        label= 'No' 
                        name="expereiencedHarass" 
                        value="No"
                        onChange={handleChange}
                        checked={data.experiencedHarass}
                        />
                    </div>
                ))}
            </Form.Group >

            {/* Witness */}
            <Form.Group className="mb-3" controlId="witnessedHarass">
                <Form.Label>Have you witnessed any form of sexual harassment at this company? </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                        type={type} 
                        label= 'Yes' 
                        name="witnessedHarass" 
                        value="Yes"
                        onChange={handleChange}
                        checked={data.witnessedHarass}
                        />
                        <Form.Check 
                        type={type} 
                        label= 'No' 
                        name="witnessedHarass" 
                        value="No"
                        onChange={handleChange}
                        checked={data.witnessedHarass}
                        />
                    </div>
                ))}
            </Form.Group>
        </Form>
    )
}

export default FormExperience;