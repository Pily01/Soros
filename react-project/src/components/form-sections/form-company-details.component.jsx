import { Form } from 'react-bootstrap';
import FormWrapper from './form-wrapper.component';

const FormCompanyDetails = () => {
    return(
        <FormWrapper progress={20}>
            {/* Company Name */}
            <Form.Group className="mb-3" controlId="company">
                <Form.Label>What is the name of the company you would like to report?*</Form.Label>
                <Form.Control required type="text" className="mb-3"/>

                <Form.Label>If you feel safe to do so, please specify your department, or a department to report.*</Form.Label>
                <Form.Control required type="text" className="mb-3"/>
            </Form.Group >
            <p>Please provide the address of the specific location.* </p>
            <Form.Group className="mb-3" controlId="company-address">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control required type="text" className="mb-3"/>

                <Form.Label>Calle</Form.Label>
                <Form.Control required type="text" className="mb-3"/>

                <Form.Label>No. Exterior</Form.Label>
                <Form.Control required type="text" className="mb-3"/>

                <Form.Label>No. Interior</Form.Label>
                <Form.Control required type="text" className="mb-3"/>

                <Form.Label>Delegacion / Municipio</Form.Label>
                <Form.Control required type="text" className="mb-3"/>

                <Form.Label>Colonia</Form.Label>
                <Form.Control required type="text" className="mb-3"/>
            </Form.Group>
        </FormWrapper>
    )
}

export default FormCompanyDetails