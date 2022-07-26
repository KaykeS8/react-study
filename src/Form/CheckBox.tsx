import React from 'react';

interface PropsCheckbox {
  options: string[];
  value: string[];
  setValue: (item: string[]) => void;
  title: string
}

export const CheckBox = ({ options, setValue, value, title }: PropsCheckbox) => {


  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter(item => item !== target.value))
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      {options.map(item => (
        <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="checkbox" value={item} checked={value.includes(item)} onChange={handleChange} />
          {item}
        </label>
      ))}
    </div>
  )
}