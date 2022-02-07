import { FC } from 'react'
import { StyledContainer } from './styled'
import ListProducts from 'containers/ListProducts'

const Home: FC = () => {
  return (
    <StyledContainer>
      <ListProducts />
    </StyledContainer>
  )
}

export default Home
