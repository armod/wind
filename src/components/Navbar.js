import styled from 'styled-components/macro'
import { BsGridFill } from 'react-icons/bs'
import { currentDate } from '../currentDate'

const Navbar = ({ name }) => {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()

  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  return (
    <Wrapper>
      <div className='name-container'>
        <div className='name'>{name}</div>
        <div className='date'>{currentDate()}</div>
      </div>
      <div className='time'>
        {hours}:{minutes}
      </div>
      <button
        className='menu-btn'
        onClick={() => {
          console.log('wykonał: Maciej Miąso')
        }}
      >
        <BsGridFill />
      </button>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  font-family: 'Russo One', sans-serif;
  font-size: 1rem;
  margin-top: 30px;
  display: flex;
  /* border: 1px solid white; */
  text-transform: capitalize;
  justify-content: space-between;
  align-items: center;
  .name-container {
    display: flex;
    flex-direction: column;
    .date {
      font-family: 'Chakra Petch', sans-serif;
      font-size: 0.75rem;
    }
  }
  .menu-btn {
    font-size: 2rem;
    background: transparent;
    border-radius: 15px;
    padding: 10px 10px 2px 10px;
    color: var(--c2);
    &:hover {
      /* color: red; */
      /* transform: scale(1.1); */
      transition: all 0.5s ease-in;
    }
  }
`
