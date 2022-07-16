import React from 'react'

export const useFetch = () => {
  const [data, setData] = React.useState<any>([])
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)


  async function request<T>(url: string, options?: T) {
    let response;
    let json;
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      setData(json)
      setLoading(false)
    } catch (error: any) {
      setError('Ocorreu um erro na aplicação')
      console.error(error)
    } finally {
      setLoading(false)
      return { response, json }
    }
  }

  return { data, error, loading, request }
}