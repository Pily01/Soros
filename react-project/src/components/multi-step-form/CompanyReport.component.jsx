import React from "react";
import { Form } from "react-bootstrap";

import './Form-steps.styles.scss'

const CompanyReport = ({ formData, setFormData }) => {
  const { reportedHarass, support } = formData;
  return (
    <div>
      <Form.Group>
        <Form.Label>
          If you have experienced or witnessed any harassment, would you feel safe reporting it to the company you work at?
        </Form.Label>
        <div>
          {[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ].map(({ label, value }) => (
            <Form.Check
              key={value}
              label={label}
              name="report"
              type="radio"
              id={`report-${value}`}
              value={value}
              checked={reportedHarass == value}
              onChange={(event) =>
                setFormData({ ...formData, reportedHarass: event.target.value })
              }
            />
          ))}
        </div>
      </Form.Group>

      <Form.Group className="bottom-form-group">
        <Form.Label>If yes, did the company do anything about it?</Form.Label>
        <div>
          {[
            { label: "Yes, it was fully resolved", value: "fully-resolved" },
            {
              label: "Yes, but it was not fully resolved",
              value: "partially-resolved",
            },
            { label: "No, there was no action taken", value: "no-action" },
          ].map(({ label, value }) => (
            <Form.Check
              disabled = {reportedHarass == 'no'}
              key={value}
              label={label}
              name="company-action"
              type="radio"
              id={`company-action-${value}`}
              value={value}
              checked={support == value}
              onChange={(event) =>
                setFormData({ ...formData, support: event.target.value })
              }
            />
          ))}
        </div>
      </Form.Group>
    </div>
  );
};

export default CompanyReport;