import styled from 'styled-components/macro'
import { BsGridFill } from 'react-icons/bs'
import { currentDate } from '../currentDate'

const Navbar = ({ name }) => {
  return (
    <Wrapper>
      <div className='name-container'>
        <div className='name'>{name}</div>
        <div className='data'>{currentDate()}</div>
      </div>
      <button className='menu-btn'>
        <BsGridFill />
      </button>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  font-family: 'Russo One', sans-serif;
  font-size: 1rem;
  border: 1px solid white;
  margin-top: 30px;
  display: flex;
  border: 1px solid white;
  justify-content: space-between;
  align-items: center;
  .name-container {
    display: flex;
    flex-direction: column;
    .data {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 0.75rem;
    }
  }
  .menu-btn {
    font-size: 2rem;
    /* background-color: transparent; */
    background-color: blue;
    border-radius: 15px;
    color: var(--c2);
  }
`
