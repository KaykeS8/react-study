import { Box, Heading } from '@chakra-ui/react';
import { PropsRadio } from '../tipagens';


export const Radio = ({ pergunta, options, id, onChange, value, active }: PropsRadio) => {
  return (
    <>
      {active ? (
        <Box border={'1px solid gray'} p={4} m={4}>
          <Heading size={'md'} mb={2}>{pergunta}</Heading>
          {options.map(option => (
            <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'monospace' }}>
              <input type={'radio'} id={id} value={option} onChange={onChange} checked={value === option} />
              {option}
            </label>
          ))}
        </Box>
      ) : null}
    </>
  )
}