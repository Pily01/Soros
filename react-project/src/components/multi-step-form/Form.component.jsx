// ---------------  F O R M  C O M P O N E N T ---------------//
// Safety report multi step form component. It displays the different
// steps of the form and handless form submition, cookies, and
// required fields

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// - Firebase
import { updateDoc, increment, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../utils/firebase/firebase.utils';
// - Components
import CompanyDetails from './CompanyDetails.component';
import CompanyRating from './CompanyRating.component';
import CompanyExperience from './CompanyExperience.component';
import CompanyWitness from './CompanyWitness.component';
import CompanyReport from './CompanyReport.component';
import CustomProgressBar from './progress-bar/ProgressBar.component';
// - Styles
import { Alert } from 'react-bootstrap';
import './Form.styles.scss';

const Form = () => {
    const [page, setPage] = useState(0);
    const cookieChecker = useRef(false)
    const navigate = useNavigate();
    // Every company attribute
    const [formData, setFormData] = useState({
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
    // Required fields and cookies messages
    const [displayMessage, setDisplayMessage] = useState("");

    const location = useLocation()
    const prop = location.state;
    const effectRef = useRef(false);
    // Google translate element
    const googleTranslateElementInit = (callback) => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: "en,es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
      if (typeof callback === 'function') {
        callback();
      }
    };
    // Google translate use effect
    useEffect(() => {
      const gTranslate = () => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }
      if(effectRef.current) return
      effectRef.current = true;
      gTranslate();
    }, []);

    useEffect(() => {
        if (prop) {
            const { name, address } = location.state
            setFormData({ ...formData, companyName: name, companyAddress: address })
        }
    }, [])

    const FormTitles = ["COMPANY INFORMATION", "COMPANY SAFETY", "HARASSMENT EXPERIENCE", "WITNESSED EXPERIENCE", "COMPANY SUPPORT"];
    // Cookies functionality
    const setCookie = (name, value) => {
        const date = new Date();
        date.setTime(date.getTime() + (24 * 7 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    };
    const cookieExists = () => { 
        const cookieValues = document.cookie.split('; ');
        for (const cookie of cookieValues) {
            const str = cookie.split("=")

            if(formData.companyName === str[0] && formData.companyAddress.includes(str[1])){
                cookieChecker.current = true;    
                console.log(cookieChecker.current)
                return true;
            }
        }
        cookieChecker.current = false;
    }
    // Form submit handler
    const handleSubmit = async () => {
        setCookie(formData.companyName, formData.companyAddress);
        try {
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
            //console.log("Document written with ID: ", docRef.id);
            navigate("/Soros/form-end");
            // navigate('/Soros', {replace: true});
        }
        catch (e) {
            alert("Error: ", e);
            console.error("Error adding document: ", e);
        }
    }
    // Create company document to submit to database
    const handleData = async () => {
        const q = query(collection(db, "companies"), where("companyName", "==", formData.companyName));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.docs.length > 0) {
            //console.log("Exists");
            const docRef = querySnapshot.docs[0].ref;
            await updateData(docRef);
        }
        else {
            const docRef = await addDoc(collection(db, "companies"), {
                companyName: formData.companyName,
                address: formData.companyAddress,
                rating: { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 },
                experiencedHarass: { "yes": 0, "no": 0 },
                experiencedFrequency: { "rare": 0, "sometimes": 0, "often": 0, "always": 0 },
                safety: { "safe": 0, "moderately safe": 0, "unsafe": 0 },
                witnessedHarass: { "yes": 0, "no": 0 },
                witnessedFrequency: { "rare": 0, "sometimes": 0, "often": 0, "always": 0 },
                reportedHarass: { "yes": 0, "no": 0 },
                support: { "fully-resolved": 0, "partially-resolved": 0, "no-action": 0 }
            });
            //console.log("Doesn't exist")
            await updateData(docRef);
        }
    }
    // Hanlde data to aggregate new values and previous values
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
    // Handle display of different multi-step form components
    const pageDisplay = () => {
        if (page === 0) {
            return <CompanyDetails formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <CompanyRating formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <CompanyExperience formData={formData} setFormData={setFormData} />
        } else if (page === 3) {
            return <CompanyWitness formData={formData} setFormData={setFormData} />
        } else if (page === 4) {
            return <CompanyReport formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div>
            <div id="google_translate_element">
                
            </div>
            <div className='form-container'>
                <div className='form'>
                    <h1 className='form-title'> Safety Report Form</h1>
                    {/*Progress Bar*/}
                    <CustomProgressBar progress={(page * 18.5) + 10}  height={10} />
                    {/*Optional disclaimer*/}
                    {page === 0 || page === 1 ?
                        <p className='disclaimer'>The following questions are required. *</p>

                        :
                        <p className='disclaimer'>The following questions are optional, but can help other women get a better idea of the
                            <br />safety of this workplace. Only answer questions you feel safe and comfortable answering. </p>
                    }
                    {/*Form*/}
                    <div className='section-title'>
                        <p>{FormTitles[page]}</p>
                    </div>
                    {/* Page Display */}
                    <div>
                        {pageDisplay()}
                    </div>
                    {displayMessage == "" ? <></> : 
                         <Alert variant='warning'>
                         {displayMessage}
                        </Alert>
                    }
                    {/* Buttons */}
                    <div className='footer'>
                        {/* Back button */}

                        <button className={page === 0 ? 'disabled-button' : 'form-button'}
                            disabled={page == 0}
                            onClick={() => {
                                setPage((currentPage) => currentPage - 1)
                            }}
                        >
                            {page === 0 ? "" : "Back"}
                        </button>
                        {/* Next button */}
                        <button className={page === FormTitles.length - 1 ? "form-button-submit" : "form-button"}
                            onClick={() => {
                                cookieExists();
                                if (page === 0 && cookieChecker.current) {
                                    setDisplayMessage("You already filled out report for this company")
                                }
                                else if (page === 0 && formData.companyName === ""){
                                    setDisplayMessage("Please fill out the Company Name!")
                                }
                                else if (page === 0 && formData.companyAddress ===""){
                                    setDisplayMessage("Please fill out the Company Address!")
                                }
                                else if (page === 1 && formData.rating === "" ) {
                                    setDisplayMessage("Please select a rating!")
                                }
                                else if (page === 1 && formData.safety ===""){
                                    setDisplayMessage("Please select a safety level!")
                                }
                                else if (page === FormTitles.length - 1) {
                                    handleData();
                                    handleSubmit();
                                }
                                else {
                                    setDisplayMessage("")
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