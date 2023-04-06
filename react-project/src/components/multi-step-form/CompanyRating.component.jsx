import React from 'react';

const CompanyRating = ({formData, setFormData}) => {
    const {rating, safety} = formData;
    return(
        <div>
            <label for="rating">How would you rate this company?</label><br />
                <input 
                type="radio" 
                id="rating1" 
                name="rating" 
                value="1" 
                required
                onChange={(event) =>
                    setFormData({ ...formData, rating: event.target.value })
                }
                checked = {rating == "1"} 
                />
                <label for="rating1">1</label><br />

                <input 
                type="radio" 
                id="rating2" 
                name="rating" 
                value="2" 
                required
                onChange={(event) =>
                    setFormData({ ...formData, rating: event.target.value })
                }
                checked = {rating == "2"}  
                />
                <label for="rating2">2</label><br />

                <input 
                type="radio" 
                id="rating3" 
                name="rating" 
                value="3" 
                required 
                onChange={(event) =>
                    setFormData({ ...formData, rating: event.target.value })
                }
                checked = {rating == "3"} 
                />
                <label for="rating3">3</label><br />
                
                <label for="safety-rating">How safe do you feel at this company?</label><br />

                <input 
                type="radio" 
                id="safe" 
                name="safety-rating" 
                value="safe" 
                required
                onChange={(event) =>
                    setFormData({ ...formData, safety: event.target.value })
                }
                checked = {safety == "safe"} 
                />
                <label for="safe">Safe</label><br />

                <input 
                type="radio" 
                id="moderately-safe" 
                name="safety-rating" 
                value="moderately safe" 
                required
                onChange={(event) =>
                    setFormData({ ...formData, safety: event.target.value })
                }
                checked = {safety == "moderately safe"}  
                />
                <label for="moderately-safe">Moderately Safe</label><br />

                <input 
                type="radio" 
                id="unsafe" 
                name="safety-rating" 
                value="unsafe" 
                required
                onChange={(event) =>
                    setFormData({ ...formData, safety: event.target.value })
                }
                checked = {safety == "unsafe"}  
                />
                <label for="unsafe">Unsafe</label><br />

        </div>
    )
}

export default CompanyRating;