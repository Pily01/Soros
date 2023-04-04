import { useMultistepForm } from "./form.hook";

import { Button } from 'react-bootstrap';

import FormCompanyDetails from "./form-company-details.component";
import FormRating from "./form-rating.component";
import FormExperience from "./form-experience.component";
import FormWitness from "./form-witness.component";
import FormReport from "./form-report.component";



const FormManager = () => {

    const { steps, currentStepIndex, step, back, next, isLastStep } = useMultistepForm([
        <FormCompanyDetails/>,
        <FormRating/>,
        <FormExperience/>,
        <FormWitness/>,
        <FormReport/>
    ]);
    const onSubmit = (event) => {
        event.preventDefault();
        next();
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                {step}
                <div>
                    {currentStepIndex !== 0 && <Button type='button' onClick={back}>Back</Button>}
                    <Button type='submit'>
                        {isLastStep ? "Submit" : "Next"}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default FormManager