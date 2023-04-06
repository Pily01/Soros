import React, {useState} from 'react';
import CompanyDetails from './CompanyDetails.component';
import CompanyRating from './CompanyRating.component';
import CompanyExperience from './CompanyExperience.component';
import CompanyWitness from './CompanyWitness.component';
import CompanyReport from './CompanyReport.component';

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
                        } else {
                          setPage((currPage) => currPage + 1);
                        }
                      }}
                >
                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    )
}

export default Form