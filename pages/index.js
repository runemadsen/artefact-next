import Link from 'next/link'
import Header from '../components/header'
import Container from '../components/container'
import Menu from '../components/menu'
import SignUp from '../components/signup'

const Index = () => (
  <div>
    <Header />
    <Menu />
    <Container>
      <p>IF ANONYMOUS</p>
      <h2>Sign up</h2>
      <SignUp />

      <h2>Sign in</h2>

      SIGNIN FORM HERE

    </Container>
  </div>
)

export default Index
