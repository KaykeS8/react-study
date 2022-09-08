import React from "react";
import { Contato } from "./Contato";
import { Button } from "./styled";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Contato />
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  );
};

export default App;
