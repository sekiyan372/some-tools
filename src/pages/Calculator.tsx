import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Center } from '../components/Box'
import { CalculatorButton, OperatorButton } from '../components/Button'
import { Heading } from '../components/Heading'

type Operator = 'plus' | 'minus' | 'multiplied' | 'divided'

export const CalculatorPage: FC = () => {
  const [firstTerm, setFirstTerm] = useState<string>('')
  const [secondTerm, setSecondTerm] = useState<string>('')
  const [operator, setOperator] = useState<Operator | null>(null)
  const [isResult, setIsResult] = useState<boolean>(false)

  const calculate = () => {
    const firstNum = firstTerm === '' ? 0 : parseFloat(firstTerm)
    const secondNum = secondTerm === '' ? 0 : parseFloat(secondTerm)
    switch (operator) {
      case 'plus':
        return firstNum + secondNum
      case 'minus':
        return firstNum - secondNum
      case 'multiplied':
        return firstNum * secondNum
      case 'divided':
        return firstNum / secondNum
      default:
        return 0
    }
  }

  const execute = () => {
    setFirstTerm(calculate().toString())
    setSecondTerm('')
    setOperator(null)
    setIsResult(true)
  }

  const reset = () => {
    setFirstTerm('')
    setSecondTerm('')
    setOperator(null)
  }

  const handleOperator = (op: Operator) => {
    //新規演算子
    if (!operator) {
      setOperator(op)
    }
    //演算子の解除
    if (operator === op) {
      setOperator(null)
    }
    //演算子の更新
    if (operator && operator !== op && secondTerm === '') {
      setOperator(op)
    }
    //演算を実行して次の演算子をセット
    if (operator && operator !== op && secondTerm !== '') {
      setFirstTerm(calculate().toString())
      setSecondTerm('')
      setOperator(op)
    }
  }

  const handleNumber = (num: number) => {
    if (operator) {
      if (num === 0 && secondTerm === '') return
      setSecondTerm(secondTerm + num.toString())
    } else {
      if (num === 0 && firstTerm === '') return
      if (!isResult) return setFirstTerm(firstTerm + num.toString())
      setFirstTerm(num.toString())
      setIsResult(false)
    }
  }

  return (
    <>
      <Heading>電卓</Heading>

      <Center>
        <Result>
          {operator && secondTerm !== ''
            ? secondTerm
            : firstTerm === ''
            ? 0
            : firstTerm}
        </Result>

        <div>
          <div>
            <CalculatorButton onClick={() => handleNumber(7)}>
              7
            </CalculatorButton>
            <CalculatorButton onClick={() => handleNumber(8)}>
              8
            </CalculatorButton>
            <CalculatorButton onClick={() => handleNumber(9)}>
              9
            </CalculatorButton>
            <OperatorButton
              isSelected={operator === 'divided'}
              onClick={() => handleOperator('divided')}>
              ÷
            </OperatorButton>
          </div>
          <div>
            <CalculatorButton onClick={() => handleNumber(4)}>
              4
            </CalculatorButton>
            <CalculatorButton onClick={() => handleNumber(5)}>
              5
            </CalculatorButton>
            <CalculatorButton onClick={() => handleNumber(6)}>
              6
            </CalculatorButton>
            <OperatorButton
              isSelected={operator === 'multiplied'}
              onClick={() => handleOperator('multiplied')}>
              ×
            </OperatorButton>
          </div>
          <div>
            <CalculatorButton onClick={() => handleNumber(1)}>
              1
            </CalculatorButton>
            <CalculatorButton onClick={() => handleNumber(2)}>
              2
            </CalculatorButton>
            <CalculatorButton onClick={() => handleNumber(3)}>
              3
            </CalculatorButton>
            <OperatorButton
              isSelected={operator === 'minus'}
              onClick={() => handleOperator('minus')}>
              -
            </OperatorButton>
          </div>
          <div>
            <CalculatorButton onClick={reset}>AC</CalculatorButton>
            <CalculatorButton onClick={() => handleNumber(0)}>
              0
            </CalculatorButton>
            <CalculatorButton onClick={execute}>=</CalculatorButton>
            <OperatorButton
              isSelected={operator === 'plus'}
              onClick={() => handleOperator('plus')}>
              +
            </OperatorButton>
          </div>
        </div>
      </Center>
    </>
  )
}

const Result = styled.div`
  width: 280px;
  height: 48px;
  margin: 8px auto;
  border: 1px solid black;
  padding: 4px;
  text-align: right;
  font-size: 2rem;
`
