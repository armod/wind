import React from 'react'
import styled from 'styled-components/macro'

const Temperature = ({ current }) => {
  // pobranie nazwy ikony pogody wraz z rozszerzeniem do wyświetlenia
  const imgName = current.condition.icon.substring(
    current.condition.icon.length - 7
  )
  // console.log(imgName)
  return (
    <Wrapper>
      <div className='temp-container'>
        <div className='temperature'>{Math.floor(current.temp_c)}&deg;</div>
        <div className='condition'>{current.condition.text}</div>
      </div>
      <div className='condition-icon'>
        <img
          src={`/images/${current.is_day === 1 ? 'day' : 'night'}/${imgName}`}
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
  border: 1px solid white;
  .temperature {
    font-family: 'Russo one', sans-serif;
    font-size: 3.5rem;
  }
  .condition {
    color: var(--c5);
  }
  .condition-icon img {
    border: 1px solid white;
    height: 6rem;
  }
`
