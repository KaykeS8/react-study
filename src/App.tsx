import React, { useMemo, useState } from 'react';
import { Produto } from './Produto'
import { GlobalStorage } from './GlobalContext';

const App = () => {


  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App