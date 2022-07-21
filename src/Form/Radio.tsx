import React from "react";

interface PropsRadio {
  options: string[];
  value: string;
  setValue: (item: string) => void;
  name: string
}

export const Radio = ({ options, value, setValue, name, ...props }: PropsRadio) => {

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value)
  }

  return (
    <>
      {options.map(option => (
        <label key={option} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input type="radio" name={name} value={option} checked={value === option} onChange={handleChange} {...props} />
          {option}
        </label>
      ))}
    </>
  )
}