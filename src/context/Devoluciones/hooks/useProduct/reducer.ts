import { ACTIONTYPE } from './interface'
import { IInitialState } from 'context/Devoluciones/interface'
import * as types from 'context/Devoluciones/actionTypes'

const reducer = (state: IInitialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        getProducts: {
          ...state.getProducts,
          loading: true
        }
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        getProducts: {
          ...state.getProducts,
          loading: false
        }
      }
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        getProducts: {
          ...state.getProducts,
          loading: false
        }
      }
    default:
      return state
  }
}

export { reducer }
