import React from 'react';


interface PropsCheckBox {
  options: string[];
  value: string[]
  setValue: (item: string[]) => void
}

export const CheckBox = ({ options, value, setValue, ...props }: PropsCheckBox) => {

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.checked) {
      setValue([...value, target.value])
    } else {
      setValue(value.filter(skill => skill !== target.value))
    }
  }

  return (
    <>
      {options.map(option => (
        <label key={option} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input type="checkbox" value={option} onChange={handleChange} checked={value.includes(option)} {...props} />
          {option}
        </label>
      ))}
    </>
  )
}