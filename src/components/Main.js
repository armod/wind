import React from 'react'
import styled from 'styled-components/macro'

const Main = ({ stations }) => {
  // console.log('main-log', stations)
  return (
    <Wrapper>
      <h2>{stations.location.name}</h2>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.main`
  border: 1px solid white;
`
