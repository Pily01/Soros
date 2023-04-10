import React, {useState} from 'react';
import CompanyDetails from './CompanyDetails.component';
import CompanyRating from './CompanyRating.component';
import CompanyExperience from './CompanyExperience.component';
import CompanyWitness from './CompanyWitness.component';
import CompanyReport from './CompanyReport.component';

import { doc, getDoc, setDoc, updateDoc, increment} from "firebase/firestore";
import {db} from '../../utils/firebase/firebase.utils';

const Form = () => {
    const [page, setPage] = useState(0);
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

    const FormTitles = ["Company Details", "Rating", "Experience", "Witnessed", "Report"];


    const handleData = async () => {
        const docRef = doc(db, "companies", formData.companyName);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Exists");
            await updateData(docRef);
        }
        else{
            await setDoc(docRef, {
                name: formData.companyName,
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
        await updateDoc(docRef, {
            [`rating.${formData.rating}`]: increment(1),
            [`experiencedHarass.${formData.experiencedHarass}`]: increment(1),
            [`experiencedFrequency.${formData.experiencedFrequency}`]: increment(1),
            [`safety.${formData.safety}`]: increment(1),
            [`witnessedHarass.${formData.witnessedHarass}`]: increment(1),
            [`witnessedFrequency.${formData.witnessedFrequency}`]: increment(1),
            [`reportedHarass.${formData.reportedHarass}`]: increment(1),
            [`support.${formData.support}`]: increment(1)
        })
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
            {/*Progress Bar*/}

            {/*Form*/}
            <div>
                <h1>{FormTitles[page]}</h1>
            </div>
            {/* Page Display */}
            <div>
                {pageDisplay()}
            </div>
            {/* Buttons */}
            <div className='footer'>
                {/* Back button */}
                <button
                    disabled= {page == 0}
                    onClick={()=>{
                        setPage((currentPage) => currentPage -1)
                    }}
                >
                    Back
                </button>
                {/* Next button */}
                <button
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                          alert("FORM SUBMITTED");
                          console.log(formData);
                          handleData();
                        } else {
                          setPage((currPage) => currPage + 1);
                        }
                      }}>
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    )
}

export default Form