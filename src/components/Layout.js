import styled from 'styled-components/macro'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.section`
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  /* height: 100vh; */
  color: var(--c2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  main {
    background: var(--c1);
    width: 200px;
    height: 400px;
  }
`
