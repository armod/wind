import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = () => {
  return (
    <Wrapper>
      <Link to='/'>dzisiaj</Link>
      <Link to='/tomorrow'>jutro</Link>
      <Link to='/next'>następne dni</Link>
    </Wrapper>
  )
}

export default Menu

// poprawic stylowanie menu
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem 2rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.2s;
  }

  a:hover {
    color: #ddd;
  }

  a:focus {
    color: red;
  }
`
