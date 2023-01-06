import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to='/'>dzisiaj</Link>
        </li>
        <li>
          <Link to='/tomorrow'>jutro</Link>
        </li>
        <li>
          <Link to='/next'>następne dni</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Menu

const Wrapper = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    li {
      list-style-type: none;
      &:active {
        color: red;
        text-decoration: dotted;
      }
      a {
        text-decoration: none;
        &:visited {
          color: var(--c2);
        }
      }
    }
  }
`
