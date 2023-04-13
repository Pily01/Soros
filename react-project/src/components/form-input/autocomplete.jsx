import { useRef, useEffect } from "react";
import {Form} from 'react-bootstrap';

const AutoComplete = (props) => {
    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {
        componentRestrictions: { country: "mx" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"]
    };


    useEffect(() => {
        if (typeof window !== 'undefined' && window.google) {
            autoCompleteRef.current = new window.google.maps.places.Autocomplete(
                inputRef.current,
                options
            );
            autoCompleteRef.current.addListener("place_changed", async function () {
                const place = await autoCompleteRef.current.getPlace();
                props.handleCallback(place);
            })
        }
    }, []);
    return (
        <div>
            <Form.Group className="mb-3" controlId="company">
                <Form.Label>Find Company</Form.Label>
                <Form.Control type="text" className="mb-3" ref={inputRef}/>
            </Form.Group >
        </div>
    );
};
export default AutoComplete;