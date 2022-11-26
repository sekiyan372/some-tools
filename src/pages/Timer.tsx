import React, { FC, useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import useSound from 'use-sound'

import { Center } from '../components/Box'
import { TimerButton } from '../components/Button'
import { Heading } from '../components/Heading'
import { Time } from '../components/Text'
import { sumTime, timerFormatter } from '../utils'

export const TimerPage: FC = () => {
  const [time, setTime] = useState<number>(0)
  const [hour, setHour] = useState<number>(0)
  const [min, setMin] = useState<number>(0)
  const [sec, setSec] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timer | null>(null)
  const [play] = useSound('/sounds/alarm.mp3')

  const start = useCallback(() => {
    if (intervalRef.current !== null) return

    const max = sumTime(hour, min, sec)
    if (max === 0) return

    const intervalId = setInterval(() => {
      setTime((t) => {
        if (t + 1 === max) {
          clearInterval(intervalId)
          play()
        }
        return t + 1
      })
    }, 10)
    intervalRef.current = intervalId
  }, [hour, min, sec])

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
      <Heading>タイマー</Heading>

      <Time>{timerFormatter(sumTime(hour, min, sec) - time)}</Time>

      <InputWrapper>
        <Input
          id="hours"
          type="number"
          max="23"
          min="0"
          onChange={(e) => setHour(parseInt(e.target.value))}
        />
        :
        <Input
          id="minutes"
          type="number"
          max="59"
          min="0"
          onChange={(e) => setMin(parseInt(e.target.value))}
        />
        :
        <Input
          id="seconds"
          type="number"
          max="59"
          min="0"
          onChange={(e) => setSec(parseInt(e.target.value))}
        />
      </InputWrapper>

      <Center>
        <TimerButton onClick={start}>start</TimerButton>
        <TimerButton onClick={stop}>stop</TimerButton>
        <TimerButton onClick={reset}>reset</TimerButton>
      </Center>
    </>
  )
}

const InputWrapper = styled.div`
  text-align: center;
  font-size: 2rem;
`

const Input = styled.input`
  width: 100px;
  margin: 12px;
  font-size: 2rem;
  text-align: center;
`
