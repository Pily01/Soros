// ---------------  C O M P A N Y  E X P E R I E N C E  C O M P O N E N T ---------------//
// Third Multistep form component: section of the form where users describes experience

import React from "react";
// - Styles
import { Form } from "react-bootstrap";
import './Form-steps.styles.scss'

const CompanyExperience = ({ formData, setFormData }) => {
  const { experiencedHarass, experiencedFrequency } = formData;

  return (
    <div>
      <Form.Group>
        <Form.Label>
          Have you experienced any form of sexual harassment at this company?
        </Form.Label>
        <div>
          {[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ].map(({ label, value }) => (
            <Form.Check
              key={value}
              label={label}
              name="harassment"
              type="radio"
              id={`harassment-${value}`}
              value={value}
              checked={experiencedHarass == value}
              onChange={(event) =>
                setFormData({ ...formData, experiencedHarass: event.target.value })
              }
            />
          ))}
        </div>
      </Form.Group>

      <Form.Group className="bottom-form-group">
        <Form.Label>If yes, how frequent was the harassment?</Form.Label>
        <div>
          {[
            { label: "Rare", value: "rare" },
            { label: "Sometimes", value: "sometimes" },
            { label: "Often", value: "often" },
            { label: "Always", value: "always" },
          ].map(({ label, value }) => (
            <Form.Check
              disabled = {experiencedHarass == 'no'}
              key={value}
              label={label}
              name="frequency"
              type="radio"
              id={value}
              value={value}
              checked={experiencedFrequency == value}
              onChange={(event) =>
                setFormData({ ...formData, experiencedFrequency: event.target.value })
              }
            />
          ))}
        </div>
      </Form.Group>
    </div>
  );
};

export default CompanyExperience;
