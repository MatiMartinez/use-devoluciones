import { FC } from 'react'
import { StyledContainer } from './styled'
import { useProduct } from 'context/Devoluciones/hooks'
import ProductWrapper from './components/ProductWrapper'
import { IProduct } from 'context/Devoluciones/interface'
import LoadingWrapper from 'hocs/LoadingWrapper'

const ListProducts: FC = () => {
  const { products, loading, error } = useProduct()

  return (
    <LoadingWrapper loading={loading} error={error}>
      <StyledContainer>
        {products.map((product: IProduct) => (
          <ProductWrapper
            key={product.id}
            id={product.id}
            name={product.name}
            order={product.order}
            imageUrl={`https://picsum.photos/id/3${product.id}/300/300`}
            canReturn={product.canReturn}
          />
        ))}
      </StyledContainer>
    </LoadingWrapper>
  )
}

export default ListProducts
