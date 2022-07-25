import React from 'react';


interface PropsSelect {
  options: string[];
  value: string;
  setValue: (item: string) => void
}

export const Select = ({ options, setValue, value, ...props }: PropsSelect) => {

  function handleChange({ target }: React.ChangeEvent<HTMLSelectElement>) {
    setValue(target.value)
  }

  return (
    <select value={value} onChange={handleChange} {...props}>
      <option value='' disabled>Produtos</option>
      {options.map(opt => (
        <option key={opt} value={opt} style={{ textTransform: "capitalize" }}>{opt}</option>
      ))}
    </select>
  )
}