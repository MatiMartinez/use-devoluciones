import { useContext, useEffect } from 'react'
import { DevolucionesContext } from 'context/Devoluciones/context'
import { IReturnType } from './interface'

const useProduct = (): IReturnType => {
  const context = useContext(DevolucionesContext)
  if (context === undefined) {
    throw new Error('useProduct must be used within and Provider')
  }

  const { products, getProducts } = context

  useEffect(() => {
    if (products.length === 0) {
      getProducts.getProducts()
    }
  }, []) // eslint-disable-line

  return { ...context.getProducts, products }
}

export { reducer } from './reducer'
export { getProducts } from './actionCreator'
export { useProduct }
