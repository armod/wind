import styled from 'styled-components/macro'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--c2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 4px;
  border-radius: 20px;
  background: var(--c1);
  width: 300px;
  height: 500px;
`
