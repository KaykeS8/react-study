import React from 'react'


type typeOptions = 'cep' | 'email' | 'nome';
type tipagemTypes = {
  cep: {
    regex: RegExp,
    message: string
  },
  email: {
    regex: RegExp,
    message: string
  }
}

const types: tipagemTypes = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido'
  },
  email: {
    regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Digite um email válido'
  }
}

export const useForm = (type?: typeOptions) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validate<T extends string>(value: T) {
    if (value.length === 0) {
      setError("Preencha um valor")
      return false
    } else if (types[type as keyof tipagemTypes] && !types[type as keyof tipagemTypes].regex.test(value)) {
      setError(types[type as keyof tipagemTypes].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}
