import React from "react";
import "./custombtn.css";

const customButton = ({ children, colored, ...otherProps }) => {
  return (
    <button
      className={`${colored ? "coloredBackgrnd" : null} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default customButton;
