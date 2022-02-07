import { FC } from 'react'
import { IProductProps } from 'components/Product/interface'
import Product from 'components/Product'
import { useReturn } from 'context/Devoluciones/hooks'

const ProductWrapper: FC<IProductProps> = ({ id, name, order, imageUrl, canReturn }) => {
  const { loading, error, returnProduct } = useReturn()

  const onClick = () => {
    returnProduct(id)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Product
      id={id}
      name={name}
      order={order}
      imageUrl={imageUrl}
      canReturn={canReturn}
      returnProduct={onClick}
    />
  )
}

export default ProductWrapper
