import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate();
  function handleClick() {
    navigate('/sobr')
  }
  return (
    <Box m={3}>
      <Heading>Login</Heading>
      <Button onClick={handleClick}>Login</Button>
    </Box>
  )
}
