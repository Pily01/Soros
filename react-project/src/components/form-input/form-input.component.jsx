import { useState } from "react";
import {useNavigate} from 'react-router-dom';


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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>How would you rate this workplace on a scale from 1 to 5? </label>
                <input type="text" value={workPlaceRating} onChange={(e)=>setWorkPlaceRating(e.target.value)}/>
                </div>

                <div>
                <label>How safe do you feel at work?</label>
                <input name="safe" type="radio" value="super safe" checked={safeAtWork === "super safe"}
                onChange={(e)=>setSafeAtWork(e.target.value)}/> Super Safe 
                <input name="safe" type="radio" value="moderately safe" checked={safeAtWork === "moderately safe"}
                onChange={(e)=>setSafeAtWork(e.target.value)}/> Moderately Safe 
                <input name="safe" type="radio" value="not safe" checked={safeAtWork === "not safe"}
                onChange={(e)=>setSafeAtWork(e.target.value)}/> Not Safe At All 
                </div>

                <div>
                <label>Have you experienced any type of harassment in this workplace?</label>
                <input type="radio" name="experience" value="Yes" checked={experiencedHarass === "Yes"}
                onChange={(e)=>setExperiencedHarass(e.target.value)}/>Yes
                <input type="radio" name="experience" value="No" checked={experiencedHarass === "No"}
                onChange={(e)=>setExperiencedHarass(e.target.value)}/>No
                </div>

                <div>
                <label>Have you witnessed any harassment happening to other employees at the company?</label>
                <input type="radio" name="witnessed" value="Yes" checked={witnessedHarass === "Yes"}
                onChange={(e)=>setWitnessedHarass(e.target.value)}/>Yes
                <input type="radio" name="witnessed" value="No" checked={witnessedHarass === "No"}
                onChange={(e)=>setWitnessedHarass(e.target.value)}/>No
                </div>

                <div>
                <label>How frequent is it?</label>
                <input name="frequent" type="radio" value="rarely" checked={howFrequent === "rarely"}
                onChange={(e)=>setHowFrequent(e.target.value)}/> Rarely
                <input name="frequent" type="radio" value="often" checked={howFrequent === "often"}
                onChange={(e)=>setHowFrequent(e.target.value)}/> Often
                <input name="frequent" type="radio" value="very often" checked={howFrequent === "very often"}
                onChange={(e)=>setHowFrequent(e.target.value)}/> Very Often
                </div>

                <div>
                <label>Have you reported the harassment to anyone at the company?</label> 
                <input type="radio" name="reported" value="Yes" checked={reportedHarass === "Yes"}
                onChange={(e)=>setReportedHarass(e.target.value)}/>Yes
                <input type="radio" name="reported" value="No" checked={reportedHarass === "No"}
                onChange={(e)=>setReportedHarass(e.target.value)}/>No
                </div>

                <div>
                <label>If yes, did the company provide you with any support after the harassment occurred?</label>
                <input type="radio" name="support" value="Yes" checked={companySupport === "Yes"}
                onChange={(e)=>setCompanySupport(e.target.value)}/>Yes
                <input type="radio" name="support" value="No" checked={companySupport === "No"}
                onChange={(e)=>setCompanySupport(e.target.value)}/>No
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )

}

export default FormInput;