import React from 'react'
import styled from 'styled-components'

const Menu = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href=''>dzisiaj</a>
        </li>
        <li>
          <a href=''>jutro</a>
        </li>
        <li>
          <a href=''>następne dni</a>
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
      a {
        text-decoration: none;
        &:active {
          color: red;
        }
        &:visited {
          color: var(--c2);
        }
      }
    }
  }
`
