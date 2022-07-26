import React from 'react';


interface PropsRadio {
  options: string[];
  value: string;
  setValue: (item: string) => void;
  name: string;
  title: string;
}

export const Radio = ({ name, options, setValue, value, title,...props }: PropsRadio) => {

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value)
  }

  return (
    <div>
      <h2>{title}</h2>
      {options.map(opt => (
        <label key={opt} style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <input type="radio" name={name} id={name} value={opt} checked={value === opt} onChange={handleChange} {...props}/>
          {opt}
        </label>
      ))}
    </div>
  )
}