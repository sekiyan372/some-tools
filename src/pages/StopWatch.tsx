import React, { FC, useCallback, useRef, useState } from 'react'
import styled from 'styled-components'

import { Center } from '../components/Box'
import { TimerButton } from '../components/Button'
import { Heading } from '../components/Heading'
import { timeFormatter } from '../utils'

export const StopWatchPage: FC = () => {
  const [time, setTime] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timer | null>(null)

  const start = useCallback(() => {
    if (intervalRef.current !== null) return
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1)
    }, 10)
  }, [])

  const stop = useCallback(() => {
    if (intervalRef.current === null) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }, [])

  const reset = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setTime(0)
  }, [])

  return (
    <>
      <Heading>ストップウォッチ</Heading>

      <Time>{timeFormatter(time)}</Time>

      <Center>
        <TimerButton onClick={start}>start</TimerButton>
        <TimerButton onClick={stop}>stop</TimerButton>
        <TimerButton onClick={reset}>reset</TimerButton>
      </Center>
    </>
  )
}

const Time = styled.p`
  font-size: 4rem;
  text-align: center;
`
