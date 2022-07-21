import React from "react";

interface PropsInput {
  label: string;
  type: string;
  id: string;
  value: string;
  setValue: (item: string) => void;
  required?:any
}

export const Input = ({ label, type, id, value, setValue, ...props }: PropsInput) => {
  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};
