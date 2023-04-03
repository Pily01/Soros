import { useState } from "react";
import {useNavigate} from 'react-router-dom';

import { Form, Button } from 'react-bootstrap'
import './form-input.styles.scss'

import { collection, addDoc } from "firebase/firestore";
import {db} from '../../utils/firebase/firebase.utils';

const FormInput = () => {
    const navigate = useNavigate();
//various states for our form inputs
    const [workPlaceRating, setWorkPlaceRating] = useState('');
    const [safeAtWork, setSafeAtWork] = useState('');
    const [experiencedHarass, setExperiencedHarass] = useState(false);
    const [witnessedHarass, setWitnessedHarass] = useState(false);
    const [howFrequent, setHowFrequent] = useState('');
    const [typeHarass, setTypeHarass] = useState('');
    const [reportedHarass, setReportedHarass] = useState(false);
    const [companySupport, setCompanySupport] = useState(false);

//method to add data to firestore database
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const docRef = await addDoc(collection(db, "responses"), {
                rating: workPlaceRating,   
                safe: safeAtWork,
                experiencedHarassment: experiencedHarass,
                witnessedHarassment: witnessedHarass,
                frequency: howFrequent,
                reportedHarassment: reportedHarass,
                companySupport: companySupport 
              });
            console.log("Document written with ID: ", docRef.id);

            navigate('/Soros', {replace: true});
        }
        catch(e){
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className="form-container">
        <Form className="report-form" onSubmit={handleSubmit()}>
            <h1>Safety Report Form</h1>

            <div className="company">
                <h6>COMPANY INFORMATION</h6>
            </div>
            
            <div className="company">
                <h6>COMPANY SAFETY</h6>
            </div>
            

            <p> Please answer the following questions to the best of your ability.
                Only the questions marked with an asterisk * are required. </p>
            
            {/* General  Rating*/}
            <Form.Group className="mb-3" controlId="formGeneralRating">
                <Form.Label>1. Generally speaking, how would you rate this workplace on a scale from 1 to 5? *required</Form.Label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={'mb-3' + '' + 'vertical'}>
                        
                        <Form.Check inline type={type} label= '1' name="rating" value="1"/>
                        <Form.Check inline type={type} label= '2' name="rating" value="2"/>
                        <Form.Check inline type={type} label= '3' name="rating" value="3"/>
                        <Form.Check inline type={type} label= '4' name="rating" value="4"/>
                        <Form.Check inline type={type} label= '5' name="rating" value="5"/>
                        <br></br>
                        <p className="under-button">Dangerous</p> <p className="under-button">Safe</p> <p className="under-button">Protective</p> 
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
                        onChange={(e)=>setSafeAtWork(e.target.value)}/>
                        <Form.Check inline type={type} label= 'Moderately safe' name="safe"
                        value = "moderately safe"
                        checked={safeAtWork === "moderately safe"}
                        onChange={(e)=>setSafeAtWork(e.target.value)}/>
                        <Form.Check inline type={type} label= 'Completely safe' name="safe"
                        value ="super safe"
                        checked={safeAtWork === "super safe"}
                        onChange={(e)=>setSafeAtWork(e.target.value)}/>
                    </div>
                ))}
            </Form.Group >

            <p>
                The following questions are optional, but can help other women get a better idea of the safety of this workplace. 
                Please only answer questions you feel safe and comfortable asking. 
            </p>

            <div className="company">
                <h6>HARASSMENT EXPERIENCE</h6>
            </div>
            
            {/* Experience */}
            <Form.Group className="mb-3" controlId="experience">
                <Form.Label>3. Have you <b>experienced</b> any type of sexual harassment in this workplace?</Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Yes' name="experience" 
                        value="Yes" 
                        checked={experiencedHarass === "Yes"}
                        onChange={(e)=>setExperiencedHarass(e.target.value)} />
                        <Form.Check type={type} label= 'No' name="experience" 
                        value="No"
                        checked={experiencedHarass === "No"}
                        onChange={(e)=>setExperiencedHarass(e.target.value)} />
                    </div>
                ))}
            </Form.Group >
            

            {/*Type of Harrassment */}
            <Form.Group className="mb-3" controlId="typeHarass">
                <Form.Label>4. If yes, what type of harassment was it? </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check  type={type} label= 'Verbal' name="Verbal"
                        value = "Verbal"
                        checked={typeHarass === "Verbal"}
                        onChange={(e)=>setTypeHarass(e.target.value)}/>
                        
                        <Form.Check  type={type} label= 'Physical' name="Physical"
                        value = "Physical"
                        checked={typeHarass === "Physical"}
                        onChange={(e)=>setTypeHarass(e.target.value)}/>
                        
                        <Form.Check  type={type} label= 'Threats' name="Threats"
                        value ="Threats"
                        checked={typeHarass === "Threats"}
                        onChange={(e)=>setTypeHarass(e.target.value)}/>
                        
                        <Form.Check  type={type} label= 'Threats' name="Threats"
                        value ="Threats"
                        checked={typeHarass === "Threats"}
                        onChange={(e)=>setTypeHarass(e.target.value)}/>

<Form.Check  type={type} label= 'Threats' name="Threats"
                        value ="Threats"
                        checked={typeHarass === "Threats"}
                        onChange={(e)=>setTypeHarass(e.target.value)}/>
                    </div>
                ))}
            </Form.Group >






            {/* Witness */}
            <Form.Group className="mb-3" controlId="witnessed">
                <Form.Label>4. Have you <b>witnessed</b> any harassment happening to other employees at the company? </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Yes' name="witnessed" 
                        value="Yes" 
                        checked={witnessedHarass === "Yes"}
                        onChange={(e)=>setWitnessedHarass(e.target.value)}/>
                        <Form.Check type={type} label= 'No' name="witnessed" 
                        value="No"
                        checked={witnessedHarass === "No"}
                        onChange={(e)=>setWitnessedHarass(e.target.value)}/>
                    </div>
                ))}
            </Form.Group>
            
            {/* Frequency */}
            <Form.Group className="mb-3" controlId="frequency">
                <Form.Label>5. How frequent was the harassment you experienced and/or witnessed? </Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Rare' name="frequent"
                        value="rarely" 
                        checked={howFrequent === "rarely"}
                        onChange={(e)=>setHowFrequent(e.target.value)}/>
                        <Form.Check type={type} label= 'Often' name="frequent" 
                        value="often"
                        checked={howFrequent === "often"}
                        onChange={(e)=>setHowFrequent(e.target.value)}/>
                        <Form.Check type={type} label= 'Very frequent' name="frequent" 
                        value="very often"
                        checked={howFrequent === "very often"}
                        onChange={(e)=>setHowFrequent(e.target.value)}/>
                    </div>
                ))}
            </Form.Group> 
            
            {/* Reported */} 
            
            <Form.Group className="mb-3" controlId="reported">
                <Form.Label>6. Have you reported the harassment to anyone at the company?</Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Yes' name="reported" 
                        value="Yes" 
                        checked={reportedHarass === "Yes"}
                        onChange={(e)=>setReportedHarass(e.target.value)}/>
                        <Form.Check type={type} label= 'No' name="reported" 
                        value="No"
                        checked={reportedHarass === "Yes"}
                        onChange={(e)=>setReportedHarass(e.target.value)}/>
                    </div>
                ))}
            </Form.Group>

            {/* Support */}
            <Form.Group className="mb-3" controlId="support">
                <Form.Label>7. If yes, did the company provide you with any support after the harassment occurred?</Form.Label>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} label= 'Yes' name="support" 
                        value="Yes" 
                        checked={companySupport === "Yes"}
                        onChange={(e)=>setCompanySupport(e.target.value)}/>
                        <Form.Check type={type} label= 'No' name="support"
                        value="No"
                        checked={companySupport === "Yes"}
                        onChange={(e)=>setCompanySupport(e.target.value)}/>
                    </div>
                ))}
            </Form.Group>

            <Button className="form-button" type="submit">
              Submit Safety Report
            </Button>
        </Form>
        </div>

        //     <div>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //         <label>How would you rate this workplace on a scale from 1 to 5? </label>
        //         <input type="text" value={workPlaceRating} onChange={(e)=>setWorkPlaceRating(e.target.value)}/>
        //         </div>

        //         <div>
        //         <label>How safe do you feel at work?</label>
        //         <input name="safe" type="radio" value="super safe" checked={safeAtWork === "super safe"}
        //         onChange={(e)=>setSafeAtWork(e.target.value)}/> Super Safe 
        //         <input name="safe" type="radio" value="moderately safe" checked={safeAtWork === "moderately safe"}
        //         onChange={(e)=>setSafeAtWork(e.target.value)}/> Moderately Safe 
        //         <input name="safe" type="radio" value="not safe" checked={safeAtWork === "not safe"}
        //         onChange={(e)=>setSafeAtWork(e.target.value)}/> Not Safe At All 
        //         </div>

        //         <div>
        //         <label>Have you experienced any type of harassment in this workplace?</label>
        //         <input type="radio" name="experience" value="Yes" checked={experiencedHarass === "Yes"}
        //         onChange={(e)=>setExperiencedHarass(e.target.value)}/>Yes
        //         <input type="radio" name="experience" value="No" checked={experiencedHarass === "No"}
        //         onChange={(e)=>setExperiencedHarass(e.target.value)}/>No
        //         </div>

        //         <div>
        //         <label>Have you witnessed any harassment happening to other employees at the company?</label>
        //         <input type="radio" name="witnessed" value="Yes" checked={witnessedHarass === "Yes"}
        //         onChange={(e)=>setWitnessedHarass(e.target.value)}/>Yes
        //         <input type="radio" name="witnessed" value="No" checked={witnessedHarass === "No"}
        //         onChange={(e)=>setWitnessedHarass(e.target.value)}/>No
        //         </div>

        //         <div>
        //         <label>How frequent is it?</label>
        //         <input name="frequent" type="radio" value="rarely" checked={howFrequent === "rarely"}
        //         onChange={(e)=>setHowFrequent(e.target.value)}/> Rarely
        //         <input name="frequent" type="radio" value="often" checked={howFrequent === "often"}
        //         onChange={(e)=>setHowFrequent(e.target.value)}/> Often
        //         <input name="frequent" type="radio" value="very often" checked={howFrequent === "very often"}
        //         onChange={(e)=>setHowFrequent(e.target.value)}/> Very Often
        //         </div>

        //         <div>
        //         <label>Have you reported the harassment to anyone at the company?</label> 
        //         <input type="radio" name="reported" value="Yes" checked={reportedHarass === "Yes"}
        //         onChange={(e)=>setReportedHarass(e.target.value)}/>Yes
        //         <input type="radio" name="reported" value="No" checked={reportedHarass === "No"}
        //         onChange={(e)=>setReportedHarass(e.target.value)}/>No
        //         </div>

        //         <div>
        //         <label>If yes, did the company provide you with any support after the harassment occurred?</label>
        //         <input type="radio" name="support" value="Yes" checked={companySupport === "Yes"}
        //         onChange={(e)=>setCompanySupport(e.target.value)}/>Yes
        //         <input type="radio" name="support" value="No" checked={companySupport === "No"}
        //         onChange={(e)=>setCompanySupport(e.target.value)}/>No
        //         </div>

        //         <button type="submit">Submit</button>

        //     </form>
        // </div>
    )

}

export default FormInput;