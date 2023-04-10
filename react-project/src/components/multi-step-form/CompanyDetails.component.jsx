import React from 'react';
import AutoComplete from "../form-input/autocomplete";
import { useRef } from 'react';

const CompanyDetails = ({ formData, setFormData}) => {
    const addressString = useRef("");

    const callBack = (mapsData) => {
        setFormData({ ...formData, companyName: mapsData.name});
        mapsData.address_components.map(address => {
            addressString.current = addressString.current+ address.long_name + "," + " ";
        });

        setFormData({ ...formData, companyName: mapsData.name, companyAddress: addressString.current })
        console.log(formData.companyName)
        console.log(addressString.current);
    }

    return (
        <div>
            <AutoComplete handleCallback={callBack}/>

            <label> Company Name </label>
            <input
                type = "text"
                placeholder='Company Name'
                value = {formData.companyName}
                onChange={(event) =>
                    setFormData({ ...formData, companyName: event.target.value })
                }
            />

            <label>Company Address</label>
            <input
                type = "text"
                placeholder='Company Address'
                value = {formData.companyAddress}
                onChange={(event) =>
                    setFormData({ ...formData, companyAddress: event.target.value })
                }
            />
        </div>
    )
}

export default CompanyDetails;