import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  onClick?: () => void
  children: ReactNode
}

export const TimerButton: FC<Props> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
}

const Button = styled.button`
  margin: 12px;
  padding: 8px;
  font-size: 2rem;
  cursor: pointer;
`
