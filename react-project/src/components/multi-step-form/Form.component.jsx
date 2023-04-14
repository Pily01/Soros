import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CompanyDetails from './CompanyDetails.component';
import CompanyRating from './CompanyRating.component';
import CompanyExperience from './CompanyExperience.component';
import CompanyWitness from './CompanyWitness.component';
import CompanyReport from './CompanyReport.component';

import NavbarComponent from '../navbar/navbar.component';

import { doc, getDoc, setDoc, updateDoc, increment, collection, query, where, getDocs, addDoc} from "firebase/firestore";
import {db} from '../../utils/firebase/firebase.utils';

import './Form.styles.scss'

const Form = () => {
    const [page, setPage] = useState(0);
    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        companyName: "",
        companyAddress: "",
        rating: "",
        safety: "",
        experiencedHarass: "",
        experiencedFrequency: "",
        witnessedHarass: "",
        witnessedFrequency: "",
        reportedHarass: "",
        support: ""
    })

    const FormTitles = ["COMPANY INFORMATION", "COMPANY SAFETY", "EXPERIENCE", "WITNESSED EXPERIENCE", "COMPANY SUPPORT"];

    const handleSubmit = async () => {

        try{
            const docRef = await addDoc(collection(db, "responses"), {
                address: formData.companyAddress,
                companyName: formData.companyName,
                rating: formData.rating,   
                safe: formData.safety,
                experiencedHarassment: formData.experiencedHarass,
                experiencedFrequency: formData.experiencedFrequency,
                witnessedHarass: formData.witnessedHarass,
                witnessedFrequency: formData.witnessedFrequency,
                reportedHarass: formData.reportedHarass,
                support: formData.support 
              });
            console.log("Document written with ID: ", docRef.id);
            navigate("/Soros/form-end");
           // navigate('/Soros', {replace: true});
        }
        catch(e){
            alert("Error: ", e);
            console.error("Error adding document: ", e);
        }
    }

    const handleData = async () => {
        const q = query(collection(db, "companies"), where("companyName", "==", formData.companyName));
        const querySnapshot = await getDocs(q);

        if(querySnapshot.docs.length > 0){
            console.log("Exists");
            const docRef = querySnapshot.docs[0].ref;
            await updateData(docRef);
        }
        else{
            const docRef = await addDoc(collection(db, "companies"), {
                companyName: formData.companyName,
                address: formData.companyAddress,
                rating: {"1": 0, "2": 0, "3": 0},
                experiencedHarass: {"yes": 0, "no": 0},
                experiencedFrequency: {"rare": 0, "sometimes": 0, "often": 0, "always": 0},
                safety: {"safe": 0, "moderately safe": 0, "unsafe": 0},
                witnessedHarass: {"yes": 0, "no": 0},
                witnessedFrequency: {"rare": 0, "sometimes": 0, "often": 0, "always": 0},
                reportedHarass: {"yes": 0, "no": 0},
                support: {"fully-resolved": 0, "partially-resolved": 0, "no-action": 0}
            });
            console.log("Doesn't exist")
            await updateData(docRef);
        }
    }

    const updateData = async (docRef) => {
        const updates = {};
        if (formData.rating) {
            updates[`rating.${formData.rating}`] = increment(1);
        }
        if (formData.experiencedHarass) {
            updates[`experiencedHarass.${formData.experiencedHarass}`] = increment(1);
        }
        if (formData.experiencedFrequency) {
            updates[`experiencedFrequency.${formData.experiencedFrequency}`] = increment(1);
        }
        if (formData.safety) {
            updates[`safety.${formData.safety}`] = increment(1);
        }
        if (formData.witnessedHarass) {
            updates[`witnessedHarass.${formData.witnessedHarass}`] = increment(1);
        }
        if (formData.witnessedFrequency) {
            updates[`witnessedFrequency.${formData.witnessedFrequency}`] = increment(1);
        }
        if (formData.reportedHarass) {
            updates[`reportedHarass.${formData.reportedHarass}`] = increment(1);
        }
        if (formData.support) {
            updates[`support.${formData.support}`] = increment(1);
        }
        
        await updateDoc(docRef, updates);
    }

    const pageDisplay = () => {
        if(page === 0){
            return <CompanyDetails formData={formData} setFormData={setFormData}/>
        }else if (page === 1) {
            return <CompanyRating formData={formData} setFormData={setFormData}/>
        }else if (page === 2) {
            return <CompanyExperience formData={formData} setFormData={setFormData}/>
        }else if(page === 3) {
            return <CompanyWitness formData={formData} setFormData={setFormData}/>
        }else if(page === 4) {
            return <CompanyReport formData={formData} setFormData={setFormData}/>
        }
    }

    return (
        <div>
        <NavbarComponent/>
        <div className='form-container'>
            <div className='form'>
                <h1 className='form-title'> Safety Report Form</h1>
                {/*Progress Bar*/}

                {/*Form*/}
                <div className='section-title'>
                    <p>{FormTitles[page]}</p>
                </div>
                {/* Page Display */}
                <div>
                    {pageDisplay()}
                </div>
                {/* Buttons */}
                <div className='footer'>
                    {/* Back button */}
                    
                    <button className={page === 0 ? 'disabled-button' : 'form-button'}
                        disabled= {page == 0}
                        onClick={()=>{
                            setPage((currentPage) => currentPage -1)
                        }}
                    >
                        Back
                    </button>
                    {/* Next button */}
                    <button className={page === FormTitles.length - 1 ? "form-button-submit" : "form-button"}
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                              alert("FORM SUBMITTED");
                              handleSubmit();
                              console.log(formData);
                            } else {
                              setPage((currPage) => currPage + 1);
                            }
                          }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Form