import React, {useState} from 'react';

const Form = () => {
    const [page, setPage] = useState(0);
    const[formData, setFormData] = useState({
        companyName: "",
        companyAdress: "",
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

        </div>
    )
}

export default Form