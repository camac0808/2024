import React from "react";

export default function Input({ id, label, onChange, inputValue }) {
  
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} required type="number" min={0} onChange={onChange} value={inputValue} />
      <p>{inputValue}</p>
    </div>
  );
}