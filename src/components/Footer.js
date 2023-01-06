import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
  return (
    <Wrapper>
      <a href='https://www.weatherapi.com/' title='Free Weather API'>
        Free Weather API
        {/* <img
          src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png'
          alt='Weather data by WeatherAPI.com'
          border='0'
        /> */}
      </a>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  border: 1px solid white;
  color: var(--c2);
  margin: 0 auto 10px;
`
