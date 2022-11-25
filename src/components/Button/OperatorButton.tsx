import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  isSelected: boolean
  onClick?: () => void
  children: ReactNode
}

export const OperatorButton: FC<Props> = ({
  isSelected,
  onClick,
  children,
}) => {
  return (
    <Button onClick={onClick} bgColor={isSelected ? 'red' : 'auto'}>
      {children}
    </Button>
  )
}

const Button = styled.button<{ bgColor: string }>`
  ${({ bgColor }) => `background-color: ${bgColor}`};
  margin: 8px;
  padding: 4px;
  font-size: 2rem;
  width: 60px;
  cursor: pointer;
`
