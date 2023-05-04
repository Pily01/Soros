// ---------------  C O M P A N Y  R E P O R T  C O M P O N E N T ---------------//
// Last Multistep form component: section of the form where users explain the company support they had
// and whether they submitted a report to the company

import React from "react";
// - Styles
import { Form } from "react-bootstrap";
import './Form-steps.styles.scss'

const CompanyReport = ({ formData, setFormData }) => {
  const { reportedHarass, support } = formData;
  return (
    <div>
      <Form.Group>
        <Form.Label>
          If you have experienced or witnessed any harassment, did you report it
          to someone in the company?
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