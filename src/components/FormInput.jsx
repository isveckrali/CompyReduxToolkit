import React from "react";

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="label w-full justify-start">
        <span className="label-text text-left">
          {label}
        </span>
      </label>

      <input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;