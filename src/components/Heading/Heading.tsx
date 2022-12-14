import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const Heading: FC<Props> = ({ children }) => {
  return <TopHeading>{children}</TopHeading>
}

const TopHeading = styled.h1`
  text-align: center;
`
