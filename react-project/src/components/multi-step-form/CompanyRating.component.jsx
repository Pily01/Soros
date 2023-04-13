import React from 'react';
import {Form} from 'react-bootstrap';

import './Form-steps.styles.scss'

const CompanyRating = ({formData, setFormData}) => {
    const {rating, safety} = formData;
    return(
        <div>
            <Form.Group>
              <Form.Label>
                On a scale from 1 to 5, how would you rate your company? *
              </Form.Label>
              <div>
                {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
                  <Form.Check
                    key={number}
                    inline
                    label={number}
                    name="rating"
                    type="radio"
                    id={`rating${number}`}
                    value={number}
                    required
                    checked={rating == number}
                    onChange={(event) =>
                      setFormData({ ...formData, rating: event.target.value })
                    }
                  />
                ))}
              </div>
            </Form.Group>
                
            <Form.Group className='bottom-form-group'>
                <Form.Label>How safe do you feel at this company?</Form.Label>
                <div>
                  {[
                    { label: "Safe", value: "safe" },
                    { label: "Moderately Safe", value: "moderately safe" },
                    { label: "Unsafe", value: "unsafe" },
                  ].map(({ label, value }) => (
                    <Form.Check
                      key={value}
                      label={label}
                      name="safety-rating"
                      type="radio"
                      id={value}
                      value={value}
                      required
                      checked={safety == value}
                      onChange={(event) =>
                        setFormData({ ...formData, safety: event.target.value })
                      }
                    />
                  ))}
                </div>
            </Form.Group>
        </div>
    )
}

export default CompanyRating;