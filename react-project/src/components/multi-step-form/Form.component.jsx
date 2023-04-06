import React, {useState} from 'react';

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

    return (
        <div>
            {"Progress Bar"}

            {"Form"}
            <div>
                <h1>{FormTitles[page]}</h1>
            </div>
            {"Page Display"}

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