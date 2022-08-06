import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from '@chakra-ui/react';
import React from 'react'
import { Radio } from './form/Radio';
import { StateResposta } from './tipagens';


const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()'
    ],
    resposta: "React.createElement()",
    id: 'p1'
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"'
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2'
  },
  {
    pergunta: 'Qual hook é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useEffect()',
    id: 'p3'
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4'
  }
]

const App = () => {

  const [respostas, setRespostas] = React.useState<StateResposta>({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  });

  const [slide, setSlide] = React.useState(0)
  const [result, setResult] = React.useState<string | null>(null)

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setRespostas({ ...respostas, [target.id]: target.value })
  }

  function resultado() {
    const corretas = perguntas.filter(({ id, resposta }) => respostas[id as keyof StateResposta] === resposta)
    setResult(`Você acertou ${corretas.length} de ${perguntas.length}`)
    return corretas;
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1)
    } else {
      setSlide(slide + 1)
      resultado()
    }
  }


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio active={slide === index} key={pergunta.id} onChange={handleChange} value={respostas[pergunta.id as keyof StateResposta]} {...pergunta} />
      ))}

      {result ? (
        <Alert
          status={'success'}
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='150px'
          m={"auto"}
          boxShadow={"md"}
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Respostas enviadas
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            {result}
          </AlertDescription>
        </Alert>
      ) : <Button mx={4} onClick={handleClick}>Próxima</Button>}
    </form >
  )
}

export default App