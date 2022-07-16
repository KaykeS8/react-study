import React from 'react';

export const useLocalStorage = <T extends string>(key: T, inicial: T) => {
  const [state, setState] = React.useState(() => {
    const local = localStorage.getItem(key)
    return local ? local : inicial
  })

  React.useEffect(() => {
    localStorage.setItem(key, state)
  }, [state, key])

  return [state, setState] as const
}