import { Button } from '@chakra-ui/react'
import React from 'react'
import styles from './Produto.module.css';

export const Prooduto = () => {

  console.log(styles)
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>Preco:8940R$</p>
      <Button colorScheme={'messenger'}>Comprar</Button>
    </div>
  )
}
