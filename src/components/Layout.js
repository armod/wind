import styled from 'styled-components/macro'

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--c2);
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -0%);
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 20px;
  background: var(--c1);
  width: 350px;
  height: 730px;
  font-family: 'Chakra Petch', sans-serif;

  font-weight: 300;
`
