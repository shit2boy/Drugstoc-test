import React from "react";

import "./form-input.styles.css";

const FormInput = ({ handleChange, label, required, error, ...otherProps }) => (
  <div className="group">
    {label && <label className={required ? "required" : null}>{label}</label>}
    {error && (
      <span style={{ color: "#dd2b0e", fontSize: "0.8rem", display: "block" }}>
        {error}
      </span>
    )}
    <input className="forminput" onChange={handleChange} {...otherProps} />
    {/* {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null} */}
  </div>
);

export default FormInput;
