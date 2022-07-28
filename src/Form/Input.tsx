import React from 'react';

interface PropsInput {
  type: string;
  value: string;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  placeholder?: any
  onBlur: () => boolean;
  error: string | null
}


export const Input = ({ id, label, onChange, onBlur, type, value, placeholder, error }: PropsInput) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
      {error && <p>{error}</p>}
    </div>
  )
}