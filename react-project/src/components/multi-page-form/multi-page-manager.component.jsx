import useFormContext from '../../hooks/useFormContext.hook';
import FormInputs from './form-inputs.component';

const Form = () => {

    const {
        title, 
        page, 
        setPage, 
        data, 
        canSubmit,
        disablePev,
        disableNext
    } = useFormContext();

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    const handlePrev = () => {
        setPage(prev => prev - 1)
    }

    const handleNext = () => {
        setPage(prev => prev + 1)
    }

    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>
            <header>
                <h2>{title[page]}</h2>
                <div className='button-container'>
                    <button 
                    type='button' 
                    className='button'
                    onClick={handlePrev}
                    >Prev</button>

                    <button 
                    type='button' 
                    className='button'
                    onClick={handleNext}
                    >Next</button>
                    
                    <button 
                    type='submit' 
                    className="button" 
                    disabled={!canSubmit}>
                        Submit
                    </button>
                    </div>
            </header>

            <h2>Billing Info</h2>

            

           

        </form>
    )

    return content
}
export default Form