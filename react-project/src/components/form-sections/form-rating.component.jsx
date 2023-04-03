import { Form } from 'react-bootstrap';

const FormRating = () => {
    return (
        <div>
                        {/* General  Rating*/}
            <Form.Group className="mb-3" controlId="formGeneralRating">
                <Form.Label>On a scale from 1 to 5, how would you rate this company? *</Form.Label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline type={type} label= '1' name="rating" value="1" 
                        />
                        <Form.Check inline type={type} label= '2' name="rating" value="2"
                        />
                        <Form.Check inline type={type} label= '3' name="rating" value="3"
                        />
                        <Form.Check inline type={type} label= '4' name="rating" value="4"
                        />
                        <Form.Check inline type={type} label= '5' name="rating" value="5"
                        />
                    </div>
                ))}
            </Form.Group >

            {/* Safety  */}
            <Form.Group className="mb-3" controlId="formSafety">
                <Form.Label>2. How safe do you feel at work? *</Form.Label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline type={type} label= 'Not safe at all' name="safe"
                        value = "not safe"
                        checked={safeAtWork === "not safe"}
                        />
                        <Form.Check inline type={type} label= 'Moderately safe' name="safe"
                        value = "moderately safe"
                        checked={safeAtWork === "moderately safe"}
                        />
                        <Form.Check inline type={type} label= 'Completely safe' name="safe"
                        value ="super safe"
                        checked={safeAtWork === "super safe"}
                        />
                    </div>
                ))}
            </Form.Group >
        </div>
    )
}

export default FormRating;