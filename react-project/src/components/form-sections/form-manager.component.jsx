import { useMultistepForm } from "./form.hook";

const FormManager = () => {
    const { steps, currentStepIndex, step, back, next, isLastStep } = useMultistepForm([
        <div>One</div>,
        <div>Two</div>,
        <div>Three</div>
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