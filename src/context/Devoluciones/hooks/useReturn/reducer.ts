import { ACTIONTYPE } from './interface'
import { IInitialState } from 'context/Devoluciones/interface'
import * as types from 'context/Devoluciones/actionTypes'

const reducer = (state: IInitialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case types.RETURN_PRODUCT_REQUEST:
      return {
        ...state,
        returnProduct: {
          ...state.returnProduct,
          loading: true
        }
      }
    case types.RETURN_PRODUCT_SUCCESS:
      const tempProducts = [...state.products]
      const indexFound = state.products?.findIndex((product) => product.id === action.payload.id)
      tempProducts[indexFound] = { ...tempProducts[indexFound], canReturn: false }
      return {
        ...state,
        products: tempProducts,
        returnProduct: {
          ...state.returnProduct,
          loading: false
        }
      }
    case types.RETURN_PRODUCT_FAILURE:
      return {
        ...state,
        returnProduct: {
          ...state.returnProduct,
          loading: false,
          error: action.payload
        }
      }
    default:
      return state
  }
}

export { reducer }
