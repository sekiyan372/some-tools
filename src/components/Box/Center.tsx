import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const Center: FC<Props> = ({ children }) => {
  return <CenterBox>{children}</CenterBox>
}

const CenterBox = styled.div`
  text-align: center;
`
