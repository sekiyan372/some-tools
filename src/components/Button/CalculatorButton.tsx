import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  onClick?: () => void
  children: ReactNode
}

export const CalculatorButton: FC<Props> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
}

const Button = styled.button`
  margin: 8px;
  padding: 4px;
  font-size: 2rem;
  width: 60px;
  cursor: pointer;
`
