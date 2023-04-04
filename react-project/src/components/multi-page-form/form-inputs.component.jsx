import FormCompanyDetails from "./form-company-details.component";
import FormExperience from './form-experience.component';
import FormReport from './form-report.component';

import FormContext from "../../context/form.context";

const FormInputs = () => {
    const { page } = FormContext()

    const display = {
        0: <FormCompanyDetails/>,
        1: <FormExperience/>,
        2: <FormReport/>
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )

    return content
}