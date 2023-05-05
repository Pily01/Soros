// ---------------  C O M P A N Y  D E T A I L S  C O M P O N E N T ---------------//
// First Multistep form component: section of the form where users type company info

import React from 'react';
import { useRef } from 'react';
// - Components
import AutoComplete from "../form-input/autocomplete";
// - Styles
import {Form, Row, Col} from 'react-bootstrap'

const CompanyDetails = ({ formData, setFormData}) => {
    const addressString = useRef("");
    // Set form data according to inputs
    const callBack = (mapsData) => {
        setFormData({ ...formData, companyName: mapsData.name});
        mapsData.address_components.map(address => {
            addressString.current = addressString.current+ address.long_name + "," + " ";
        });
        setFormData({ ...formData, companyName: mapsData.name, companyAddress: addressString.current })
    }

    return (
        <div>
            <Form>
                <AutoComplete handleCallback={callBack}/>

                <Form.Group className="mb-3">
                    <Form.Label>Company Name *</Form.Label>
                <Form.Control
                    required
                    type = "text"
                    placeholder='Market 123'
                    value = {formData.companyName}
                    onChange={(event) =>
                        setFormData({ ...formData, companyName: event.target.value })
                    } 
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Company Address *</Form.Label>
                    <Form.Control
                    required
                    type = "text"
                    placeholder='10 Street'
                    value = {formData.companyAddress}
                    onChange={(event) =>
                        setFormData({ ...formData, companyAddress: event.target.value })
                    }
                    />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                    value="Mexico City"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                </Form>
        </div>
    )
}

export default CompanyDetails;