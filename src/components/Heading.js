import React from "react";
import "./Heading.css";

const Heading = ({
  heading = "OUR EXPERTISE",
  subheading = "",
  className = "",
}) => {
  return (
    <div className={`section-heading ${className}`}>
      <h2 className="section-heading-title">
        {heading}
      </h2>

      {subheading && (
        <p className="section-heading-subtitle">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default Heading;