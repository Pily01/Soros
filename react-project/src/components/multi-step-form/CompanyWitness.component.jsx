import React from 'react';

const CompanyWitness = ({formData, setFormData}) => {
    const {witnessedHarass, witnessedFrequency} = formData;

    return (
        <div>
            <label htmlFor="witnessed">Have you experienced any form of sexual harassment at this company?</label><br/>
            <input 
            type="radio" 
            id="witnessed-yes" 
            name="witnessed" 
            value="yes" 
            onChange={(event) =>
                setFormData({ ...formData, witnessedHarass: event.target.value })
            }
            checked = {witnessedHarass == "yes"}
            />
            <label htmlFor="witnessed-yes">Yes</label><br/>
            <input 
            type="radio" 
            id="witnessed-no" 
            name="witnessed" 
            value="no"
            onChange={(event) =>
                setFormData({ ...formData, witnessedHarass: event.target.value })
            }
            checked = {witnessedHarass == "no"}
            />
            <label htmlFor="witnessed-no">No</label><br/>


            <label>If yes, how frequent was the harassment?</label><br/>
            <input type="radio" 
            name="frequency" 
            id="rare-witnessed" 
            value="rare" 
            onChange={(event) =>
                setFormData({ ...formData, witnessedFrequency: event.target.value })
            }
            checked = {witnessedFrequency == "rare"}
            />
            <label htmlFor="rare-witnessed">Rare</label><br/>

            <input type="radio" 
            name="frequency" 
            id="sometimes-witnessed" 
            value="sometimes" 
            onChange={(event) =>
                setFormData({ ...formData, witnessedFrequency: event.target.value })
            }
            checked = {witnessedFrequency == "sometimes"}
            />
            <label htmlFor="sometimes-witnessed">Sometimes</label><br/>

            <input type="radio" 
            name="frequency" 
            id="often-witnessed" 
            value="often" 
            onChange={(event) =>
                setFormData({ ...formData, witnessedFrequency: event.target.value })
            }
            checked = {witnessedFrequency == "often"}
            />
            <label for="often-witnessed">Often</label><br/>

            <input type="radio" 
            name="frequency" 
            id="always-witnessed" 
            value="always" 
            onChange={(event) =>
                setFormData({ ...formData, witnessedFrequency: event.target.value })
            }
            checked = {witnessedFrequency == "always"}
            />
            <label for="always-witnessed">Always</label><br/>
        </div>
    )
}

export default CompanyWitness;