import React from 'react';

const CompanyExperience = ({formData, setFormData}) => {
    const {experiencedHarass, experiencedFrequency} = formData;

    return (
        <div>
            <label htmlFor="harassment">Have you experienced any form of sexual harassment at this company?</label><br/>
            <input 
            type="radio" 
            id="harassment-yes" 
            name="harassment" 
            value="yes" 
            onChange={(event) =>
                setFormData({ ...formData, experiencedHarass: event.target.value })
            }
            checked = {experiencedHarass == "yes"}
            />
            <label htmlFor="harassment-yes">Yes</label><br/>
            <input 
            type="radio" 
            id="harassment-no" 
            name="harassment" 
            value="no"
            onChange={(event) =>
                setFormData({ ...formData, experiencedHarass: event.target.value })
            }
            checked = {experiencedHarass == "no"}
            />
            <label htmlFor="harassment-no">No</label><br/>


            <label>If yes, how frequent was the harassment?</label><br/>
            <input type="radio" 
            name="frequency" 
            id="rare" 
            value="rare" 
            onChange={(event) =>
                setFormData({ ...formData, experiencedFrequency: event.target.value })
            }
            checked = {experiencedFrequency == "rare"}
            />
            <label htmlFor="rare">Rare</label><br/>

            <input type="radio" 
            name="frequency" 
            id="sometimes" 
            value="sometimes" 
            onChange={(event) =>
                setFormData({ ...formData, experiencedFrequency: event.target.value })
            }
            checked = {experiencedFrequency == "sometimes"}
            />
            <label htmlFor="sometimes">Sometimes</label><br/>

            <input type="radio" 
            name="frequency" 
            id="often" 
            value="often" 
            onChange={(event) =>
                setFormData({ ...formData, experiencedFrequency: event.target.value })
            }
            checked = {experiencedFrequency == "often"}
            />
            <label for="often">Often</label><br/>

            <input type="radio" 
            name="frequency" 
            id="always" 
            value="always" 
            onChange={(event) =>
                setFormData({ ...formData, experiencedFrequency: event.target.value })
            }
            checked = {experiencedFrequency == "always"}
            />
            <label for="always">Always</label><br/>
        </div>
    )
}

export default CompanyExperience;