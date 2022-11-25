import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Center } from '../components/Box'
import { Heading } from '../components/Heading'

const imageList = [
  '/images/stratocaster.jpg',
  '/images/precision_bass.jpg',
  '/images/les_poal.jpg',
]

export const ImageSelectorPage: FC = () => {
  const [image, setImage] = useState<string>(imageList[0])

  return (
    <>
      <Heading>画像切り替え</Heading>

      <Center>
        <SelectedImage src={image} alt="selected image" />

        <p>↓↓↓画像を選択してね↓↓↓</p>
        <Center>
          {imageList.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="image"
              width="256"
              height="144"
              onClick={() => setImage(image)}
            />
          ))}
        </Center>
      </Center>
    </>
  )
}

const SelectedImage = styled.img`
  width: 640px;
  height: 360px;
  @media screen and (max-width: 640px) {
    width: 320px;
    height: 180px;
  }
`

const Image = styled.img`
  padding: 12px;
  width: 256px;
  height: 144px;
  cursor: pointer;
  &:hover {
    transform: translate(0, 4px);
  }
  @media screen and (max-width: 640px) {
    width: 128px;
    height: 72px;
  }
`
