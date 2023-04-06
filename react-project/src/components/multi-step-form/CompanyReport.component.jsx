import React from 'react';

const CompanyReport = ({formData, setFormData}) => {
    const {reportedHarass, support} = formData;
    return(
        <div>
            <label>If you have experienced or witnessed any harassment, did you report it to someone in the company?</label>
            <br/>
            <input 
            type="radio" 
            id="yes" 
            name="report" 
            value="yes"
            onChange={(event) =>
                setFormData({ ...formData, reportedHarass: event.target.value })
            }
            checked = {reportedHarass == "yes"}
            />
            <label for="yes">Yes</label>
            <br/>
            <input 
            type="radio" 
            id="no" 
            name="report" 
            value="no"
            onChange={(event) =>
                setFormData({ ...formData, reportedHarass: event.target.value })
            }
            checked = {reportedHarass == "no"}
            />
            <label for="no">No</label>

            <label>If yes, did the company do anything about it?</label>
            <input 
            type="radio" 
            id="fully-resolved" 
            name="company-action" 
            value="fully-resolved"
            onChange={(event) =>
                setFormData({ ...formData, support: event.target.value })
            }
            checked = {support == "fully-resolved"}
            />
            <label for="fully-resolved">Yes, it was fully resolved</label><br/>
            <input 
            type="radio" 
            id="partially-resolved" 
            name="company-action" 
            value="partially-resolved"
            onChange={(event) =>
                setFormData({ ...formData, support: event.target.value })
            }
            checked = {support == "partially-resolved"}
            />
            <label for="partially-resolved">Yes, but it was not fully resolved</label><br/>
            <input 
            type="radio" 
            id="no-action" 
            name="company-action" 
            value="no-action"
            onChange={(event) =>
                setFormData({ ...formData, support: event.target.value })
            }
            checked = {support == "no-action"}

            />
            <label for="no-action">No, there was no action taken</label><br/>
        </div>
    )
}

export default CompanyReport;