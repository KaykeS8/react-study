import React from "react";

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  async function request<T>(url: string, options?: T) {
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setLoading(false);
    } catch (error) {
      setError("Ocorreu um erro");
      json = null;
      console.error(error);
    } finally {
      setLoading(false);
      setData(json);
      return { response, json };
    }
  }

  return { data, error, loading, request };
};
