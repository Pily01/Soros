import {useState} from "react";

const AddCompany = () => {
    const [companyName, setCompanyName] = useState("");
    const [address, setAddress] = useState("");



    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Company Name:
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value) } />
            </label>
            <label>
                Address:
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value) } />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}