import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const Time: FC<Props> = ({ children }) => {
  return <TimeView>{children}</TimeView>
}

const TimeView = styled.p`
  font-size: 4rem;
  text-align: center;
`
