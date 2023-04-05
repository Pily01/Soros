import { Form } from 'react-bootstrap';

import FormContext from '../../context/form.context';

const FormCompanyDetails = () => {
    const { data, handleChange } = FormContext;
    return(
        <Form>
            {/* Company Name */}
            <Form.Group className="mb-3" controlId="company">
                <Form.Label>What is the name of the company you would like to report?*</Form.Label>
                <Form.Control className="mb-3"
                required 
                type="text"
                value={data.companyName}
                onChange={handleChange}
                />
                <Form.Label>What is the address?*</Form.Label>
                <Form.Control required 
                type="text" 
                className="mb-3"
                value={data.companyAdress}
                onChange={handleChange}
                />
            </Form.Group >
        </Form>
    )
}

export default FormCompanyDetails