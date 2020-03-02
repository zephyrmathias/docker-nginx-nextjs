import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import styled from 'styled-components'
import {
  black,
  black6,
  black5,
  black4,
  black3,
  black2,
  gray8,
  gray7,
  gray6,
  gray5,
  gray4,
  gray3,
  white,
  blue8,
  blue7,
  blue6,
  blue5,
  blue4,
  blue3,
  blue2,
  green8,
  green7,
  green6,
  green5,
  green4,
  green3,
  green2,
  yellow8,
  yellow7,
  yellow6,
  yellow5,
  yellow4,
  yellow3,
  yellow2,
  red8,
  red7,
  red6,
  red5,
  red4,
  red3,
  red2,
} from '../src/constants/colors'

const Colors = styled.div`
  display: flex;
`

const ColorTab = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: fit-content;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 15px;
`

const Color = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ color }) => color};
  width: 150px;
  height: 50px;
  background-color: ${({ bg }) => bg};

  > span {
    font-size: 12px;
    margin-bottom: 3px;
  }
`

Color.defaultProps = {
  color: 'white',
}

export default { title: 'Colors', decorators: [withKnobs] }

export const ColorsPalette = () => {
  const color = select('Black Font Color', ['white', 'black'])

  return (
    <Colors>
      <ColorTab>
        <h2>Black</h2>
        <Color bg={black} color={color}>
          <span>black</span>
          <div>{black}</div>
        </Color>
        <Color bg={black} color={color}>
          <span>black</span>
          <div>{black}</div>
        </Color>
        <Color bg={black6} color={color}>
          <span>black6</span>
          <div>{black6}</div>
        </Color>
        <Color bg={black5} color={color}>
          <span>black5</span>
          <div>{black5}</div>
        </Color>
        <Color bg={black4} color={color}>
          <span>black4</span>
          <div>{black4}</div>
        </Color>
        <Color bg={black3} color={color}>
          <span>black3</span>
          <div>{black3}</div>
        </Color>
        <Color bg={black2} color={color}>
          <span>black2</span>
          <div>{black2}</div>
        </Color>
      </ColorTab>

      <ColorTab>
        <h2>Gray</h2>
        <Color bg={gray8} color={color}>
          <span>gray8</span>
          <div>{gray8}</div>
        </Color>
        <Color bg={gray7} color={color}>
          <span>gray7</span>
          <div>{gray7}</div>
        </Color>
        <Color bg={gray6} color={color}>
          <span>gray6</span>
          <div>{gray6}</div>
        </Color>
        <Color bg={gray5} color={color}>
          <span>gray5</span>
          <div>{gray5}</div>
        </Color>
        <Color bg={gray4} color={color}>
          <span>gray4</span>
          <div>{gray4}</div>
        </Color>
        <Color bg={gray3} color='black'>
          <span>gray3</span>
          <div>{gray3}</div>
        </Color>
        <Color bg={white} color='black'>
          <span>white</span>
          <div>{white}</div>
        </Color>
      </ColorTab>

      <ColorTab>
        <h2>Blue</h2>
        <Color bg={blue8} color={color}>
          <span>blue8</span>
          <div>{blue8}</div>
        </Color>
        <Color bg={blue7} color={color}>
          <span>blue7</span>
          <div>{blue7}</div>
        </Color>
        <Color bg={blue6} color={color}>
          <span>blue6</span>
          <div>{blue6}</div>
        </Color>
        <Color bg={blue5} color={color}>
          <span>blue5</span>
          <div>{blue5}</div>
        </Color>
        <Color bg={blue4} color={color}>
          <span>blue4</span>
          <div>{blue4}</div>
        </Color>
        <Color bg={blue3} color={color}>
          <span>blue3</span>
          <div>{blue3}</div>
        </Color>
        <Color bg={blue2} color={color}>
          <span>blue2</span>
          <div>{blue2}</div>
        </Color>
      </ColorTab>

      <ColorTab>
        <h2>Green</h2>
        <Color bg={green8} color={color}>
          <span>green8</span>
          <div>{green8}</div>
        </Color>
        <Color bg={green7} color={color}>
          <span>green7</span>
          <div>{green7}</div>
        </Color>
        <Color bg={green6} color={color}>
          <span>green6</span>
          <div>{green6}</div>
        </Color>
        <Color bg={green5} color={color}>
          <span>green5</span>
          <div>{green5}</div>
        </Color>
        <Color bg={green4} color={color}>
          <span>green4</span>
          <div>{green4}</div>
        </Color>
        <Color bg={green3} color={color}>
          <span>green3</span>
          <div>{green3}</div>
        </Color>
        <Color bg={green2} color={color}>
          <span>green2</span>
          <div>{green2}</div>
        </Color>
      </ColorTab>

      <ColorTab>
        <h2>Yellow</h2>
        <Color bg={yellow8} color={color}>
          <span>yellow8</span>
          <div>{yellow8}</div>
        </Color>
        <Color bg={yellow7} color={color}>
          <span>yellow7</span>
          <div>{yellow7}</div>
        </Color>
        <Color bg={yellow6} color={color}>
          <span>yellow6</span>
          <div>{yellow6}</div>
        </Color>
        <Color bg={yellow5} color={color}>
          <span>yellow5</span>
          <div>{yellow5}</div>
        </Color>
        <Color bg={yellow4} color={color}>
          <span>yellow4</span>
          <div>{yellow4}</div>
        </Color>
        <Color bg={yellow3} color={color}>
          <span>yellow3</span>
          <div>{yellow3}</div>
        </Color>
        <Color bg={yellow2} color={color}>
          <span>yellow2</span>
          <div>{yellow2}</div>
        </Color>
      </ColorTab>

      <ColorTab>
        <h2>Red</h2>
        <Color bg={red8} color={color}>
          <span>red8</span>
          <div>{red8}</div>
        </Color>
        <Color bg={red7} color={color}>
          <span>red7</span>
          <div>{red7}</div>
        </Color>
        <Color bg={red6} color={color}>
          <span>red6</span>
          <div>{red6}</div>
        </Color>
        <Color bg={red5} color={color}>
          <span>red5</span>
          <div>{red5}</div>
        </Color>
        <Color bg={red4} color={color}>
          <span>red4</span>
          <div>{red4}</div>
        </Color>
        <Color bg={red3} color={color}>
          <span>red3</span>
          <div>{red3}</div>
        </Color>
        <Color bg={red2} color={color}>
          <span>red2</span>
          <div>{red2}</div>
        </Color>
      </ColorTab>
    </Colors>
  )
}
