import React from "react";

const Input = ({ value, onChange, name, label, type = "text" }) => {
  return (
    <div className="form-group pt-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="form-control"
      />
    </div>
  );
};

export default Input;
