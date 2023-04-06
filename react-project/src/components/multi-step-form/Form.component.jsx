import React, {useState} from 'react';
import CompanyDetails from './CompanyDetails.component';

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

    const pageDisplay = () => {
        if(page === 0){
            return <CompanyDetails formData={formData} setFormData={setFormData}/>
        } 
    }

    return (
        <div>
            {"Progress Bar"}

            {"Form"}
            <div>
                <h1>{FormTitles[page]}</h1>
            </div>
            {"Page Display"}
            <div>
                {pageDisplay()}
            </div>
            {"Buttons"}
            <div className='footer'>
                <button>
                    Back
                </button>
                <button>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Form