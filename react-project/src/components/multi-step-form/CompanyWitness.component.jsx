import React from "react";
import { Form } from "react-bootstrap";

import "./Form-steps.styles.scss"

const CompanyWitness = ({ formData, setFormData }) => {
  const { witnessedHarass, witnessedFrequency } = formData;

  return (
    <div>
      <Form.Group>
        <Form.Label>
          Have you witnessed any form of sexual harassment at this company?
        </Form.Label>
        <div>
          {[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ].map(({ label, value }) => (
            <Form.Check
              key={value}
              label={label}
              name="witnessed"
              type="radio"
              id={`witnessed-${value}`}
              value={value}
              checked={witnessedHarass == value}
              onChange={(event) =>
                setFormData({ ...formData, witnessedHarass: event.target.value })
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
              disabled = {witnessedHarass == 'no'}
              key={value}
              label={label}
              name="frequency"
              type="radio"
              id={`${value}-witnessed`}
              value={value}
              checked={witnessedFrequency == value}
              onChange={(event) =>
                setFormData({ ...formData, witnessedFrequency: event.target.value })
              }
            />
          ))}
        </div>
      </Form.Group>
    </div>
  );
};

export default CompanyWitness;