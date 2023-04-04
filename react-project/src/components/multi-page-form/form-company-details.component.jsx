import { Form } from 'react-bootstrap';

const FormCompanyDetails = () => {

    return(
        <Form>
            {/* Company Name */}
            <Form.Group className="mb-3" controlId="company">
                <Form.Label>What is the name of the company you would like to report?*</Form.Label>
                <Form.Control required type="text" className="mb-3" 
                />
                <Form.Label>What is the address?*</Form.Label>
                <Form.Control required type="text" className="mb-3" 
                />
            </Form.Group >
        </Form>
    )
}

export default FormCompanyDetails