import React from "react";

const Alert = ({ alert }) => {
  return alert !== null ? (
    <div className={`alert alert-${alert.type}`}>
      <i className="las la-info-circle"></i> {alert.message}
    </div>
  ) : null;
};

export default Alert;
