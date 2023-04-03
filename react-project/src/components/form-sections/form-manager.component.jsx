import { useMultistepForm } from "./form.hook";

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
    return(
        <div>
            <form>
                {currentStepIndex + 1} / {steps.length}
                {step}
                <div>
                    {currentStepIndex !== 0 && <button type='button' onClick={back}>Back</button>}
                    <button type='button' onClick={next}>
                        {isLastStep ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormManager