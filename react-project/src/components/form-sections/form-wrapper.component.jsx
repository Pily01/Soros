import { ProgressBar } from "react-bootstrap";

const FormWrapper = ({ description, children, progress}) => {
    return(
        <div style={{padding: '2rem'}}>
            <ProgressBar now={progress} />
            <h2 style={{textAlign: 'center', margin: 0, marginBottom: '2rem'}}>
                Safety Report Form
            </h2>
            <p>{description}</p>
            <div style={{
                gap: '1rem .5rem',
                justifyContent: 'flex-start',
                gridTemplateColumns: 'auto minmax(auto, 400px)'
            }}>{children}</div>    
        </div>

    )
}

export default FormWrapper;