import React from 'react'
import styled from 'styled-components/macro'
import { imgIconName } from '../generateIcon'

const Temperature = ({ current }) => {
  const { is_day, temp_c } = current
  // pobranie nazwy ikony pogody wraz z rozszerzeniem do wyświetlenia
  // const imgName = current.condition.icon.substring(
  //   current.condition.icon.length - 7
  // )
  // console.log(imgName)
  return (
    <Wrapper>
      <div className='temp-container'>
        <div className='temperature'>{Math.round(temp_c)}&deg;</div>
        <div className='condition'>{current.condition.text}</div>
      </div>
      <div className='condition-icon'>
        <img
          src={`/images/${is_day === 1 ? 'day' : 'night'}/${imgIconName(
            current.condition.icon
          )}`}
          alt='icon'
        />
      </div>
    </Wrapper>
  )
}

export default Temperature

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid white; */
  .temperature {
    font-family: 'Russo one', sans-serif;
    font-size: 3.5rem;
  }
  .condition {
    color: var(--c5);
  }
  .condition-icon img {
    height: 6rem;
  }
`
