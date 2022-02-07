import { useReducer } from 'react'
import { initialState } from './initialState'
import { rootReducer } from './combineReducer'
import { returnProduct } from './hooks/useReturn'
import { getProducts } from './hooks/useProduct'

const useCustomReducer = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  const value = {
    ...state,
    getProducts: {
      ...state.getProducts,
      getProducts: () => getProducts(dispatch)
    },
    returnProduct: {
      ...state.returnProduct,
      returnProduct: (id: string) => returnProduct(dispatch, id)
    }
  }

  return {
    value
  }
}

export default useCustomReducer
