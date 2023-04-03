
const FormWrapper = ({title, children}) => {
    return(
        <div style={{display: "flex", padding: '1rem'}}>
            <h2 style={{textAlign: 'center', margin: 0, marginBottom: '2rem'}}>{title}</h2>
            <div style={{
                display: 'grid',
                gap: '1rem .5rem',
                justifyContent: 'flex-start',
                gridTemplateColumns: 'auto minimax(auto, 400px)'
            }}>{children}</div>    
        </div>

    )
}

export default FormWrapper;