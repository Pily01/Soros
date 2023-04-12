import React from 'react';

const CompanyDetails = ({ formData, setFormData}) => {
    return (
        <div>
            
            <label> Company Name </label><br/>
            <input
                type = "text"
                placeholder='Company Name'
                value = {formData.companyName}
                onChange={(event) =>
                    setFormData({ ...formData, companyName: event.target.value })
                }
            />
            <br/>
            <label>Company Address</label><br/>
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