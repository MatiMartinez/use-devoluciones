import { Dispatch } from 'react'
import * as types from 'context/Devoluciones/actionTypes'
import { ACTIONTYPE } from './interface'

const returnProduct = (dispatch: Dispatch<ACTIONTYPE>, id: string) => {
  dispatch({ type: types.RETURN_PRODUCT_REQUEST })
  try {
    dispatch({
      type: types.RETURN_PRODUCT_SUCCESS,
      payload: { id: id }
    })
  } catch (error) {
    const err = { state: true, status: 500, message: 'Internal Server Error' }
    dispatch({ type: types.RETURN_PRODUCT_FAILURE, payload: err })
  }
}

export { returnProduct }
