import React from 'react'
import styled from 'styled-components'

const Hours = ({ forecast }) => {
  const hours = forecast[0].hour
  console.log(hours.map((i, index) => console.log(i)))
  return (
    <Wrapper>
      <div className='hours'>
        {/* {forecast[0].hour[0].temp_c} */}
        {/* {forecast[0].map((item) => console.log(item))} */}
      </div>
    </Wrapper>
  )
}

export default Hours

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid white; */
  background: var(--c3);
  border-radius: 15px;
  margin: 10px 0;
  padding: 4px;
  .hours {
    display: flex;
    flex-direction: row;
    height: 5rem;
    background: var(--c4);
  }
`
