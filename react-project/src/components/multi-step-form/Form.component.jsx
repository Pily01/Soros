import React, {useState} from 'react';
import CompanyDetails from './CompanyDetails.component';
import CompanyRating from './CompanyRating.component';
import CompanyExperience from './CompanyExperience.component';
import CompanyWitness from './CompanyWitness.component';
import CompanyReport from './CompanyReport.component';


import './Form.styles.scss'


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

    const FormTitles = ["COMPANY INFORMATION", "COMPANY SAFETY", "EXPERIENCE", "WITNESSED EXPERIENCE", "COMPANY SUPPORT"];

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
                    <button className='form-button'
                        disabled= {page == 0}
                        onClick={()=>{
                            setPage((currentPage) => currentPage -1)
                        }}
                    >
                        Back
                    </button>
                    {/* Next button */}
                    <button className='form-button'
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
        </div>

    )
}

export default Form