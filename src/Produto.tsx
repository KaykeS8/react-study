import React, { useEffect, useState } from 'react'

interface Idados {
  nome?: string
  preco?: string
}

export const Produto = () => {
  const [dados, setDados] = React.useState<Idados>({})
  const [preference, setPreference] = React.useState<any>(null)

  async function handleFetch(event: any) {
    setPreference(event.target.innerText)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const dadosJson = await response.json()
    setDados(dadosJson)
  }

  useEffect(() => {
    if (preference !== null) {
      localStorage.setItem("Produto", preference)
    }
  }, [preference])

  useEffect(() => {
    const productPreference = window.localStorage.getItem("Produto")
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${productPreference}`)
      .then(response => response.json())
      .then(json => setDados(json))
  }, [])


  return (
    <div>
      <h1>Preferencia:{dados.nome}</h1>
      <button onClick={handleFetch}>notebook</button>
      <button onClick={handleFetch}>smartphone</button>
      {
        dados && (
          <>
            <h2>{dados.nome}</h2>
            <p>{dados.preco}</p>
          </>
        )
      }
    </div >
  )
}
