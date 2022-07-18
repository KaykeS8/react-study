import React from "react";

const App = () => {
  const [radio, setRadio] = React.useState("");

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setRadio(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          name="sexo"
          id="sexo"
          value="masculino"
          onChange={handleChange}
        />
        Masculino
      </label>
      <label>
        <input
          type="radio"
          name="sexo"
          id="sexo"
          value="femenino"
          onChange={handleChange}
        />
        femenino
      </label>
      <p>item selecionado {radio}</p>
    </form>
  );
};

export default App;
