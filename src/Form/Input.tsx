import React from 'react';

interface PropsInput {
  type: string;
  value: string;
  onChange: ({target}:React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  placeholder?: any
  onBlur: any;
}


export const Input = ({ id, label, onChange, type, value, ...props }: PropsInput) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} {...props} />
    </div>
  )
}