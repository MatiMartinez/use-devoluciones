import { FC } from 'react'
import { IProductProps } from './interface'
import {
  StyledCard,
  StyledImage,
  StyledBody,
  StyledName,
  StyledRow,
  StyledOrder,
  StyledButton
} from './styled'

const Product: FC<IProductProps> = (props) => {
  const { name, order, backgroundColor = '#ffffff', imageUrl, canReturn, returnProduct } = props

  return (
    <StyledCard backgroundColor={backgroundColor}>
      <StyledImage src={imageUrl} alt={name} />
      <StyledBody>
        <StyledName>{name}</StyledName>
        <StyledRow>
          <StyledOrder>{order}</StyledOrder>
          {returnProduct && canReturn && (
            <StyledButton onClick={returnProduct}>Devolución</StyledButton>
          )}
        </StyledRow>
      </StyledBody>
    </StyledCard>
  )
}

export default Product
