import { createContext, useState, useEffect } from 'react';

const FormContext = createContext({})

export const FormProvider = ({ children }) => {
    const title = {
        0: 'Company Data', 
        1: 'Expereince or Witness', 
        2: 'Reported'
    }
     
    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        companyName: '',
        companyAdress: '',
        expereiencedHarass: '',
        witnessedHarass: '',
        reportedHarass: '',
        companySupport: ''
    })

    // Optional values
    const { 
        expereiencedHarass, 
        witnessedHarass,
        reportedHarass,
        companySupport,
        ...requiredInputs
    } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const handleChange = e => {
        const type = e.target.type;
        const name = e.target.name;
        const value = type === "checkbox" ? e.target.checked : e.targ.value;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }


    return(
        <FormContext.Provider value={{title, page, setPage, data, setData, canSubmit}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;