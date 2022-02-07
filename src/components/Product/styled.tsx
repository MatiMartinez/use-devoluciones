import styled from 'styled-components'
import { IStyledProduct } from './interface'

const StyledCard = styled.div<IStyledProduct>`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
`

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
`

const StyledName = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
`

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledOrder = styled.p`
  font-size: 1rem;
  font-weight: 400;
`

const StyledButton = styled.button`
  font-size: 0.75rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  background-color: #333333;
  color: #ffffff;
`

export { StyledCard, StyledImage, StyledBody, StyledName, StyledRow, StyledOrder, StyledButton }
