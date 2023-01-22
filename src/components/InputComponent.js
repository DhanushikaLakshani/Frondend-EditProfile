import React from "react";

const InputComponent = (props) => {
  const { label, value, setValue } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
      <label> {label} </label>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default InputComponent;
