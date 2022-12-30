import styled from 'styled-components/macro'
import { BsGridFill } from 'react-icons/bs'

const Navbar = ({ name }) => {
  return (
    <Wrapper>
      <div className='name-conatiner'>
        <div className='name'>{name}</div>
        <div className='data'>{new Date().getFullYear()}</div>
      </div>
      <buttton className='menu-btn'>
        <BsGridFill />
      </buttton>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  font-family: 'Russo One', sans-serif;
  font-size: 2rem;
  border: 1px solid white;
  margin-top: 30px;
  display: flex;
  border: 1px solid white;
  justify-content: space-between;
`
