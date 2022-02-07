import { Dispatch } from 'react'
import * as types from 'context/Devoluciones/actionTypes'
import { ACTIONTYPE } from './interface'

const getProducts = async (dispatch: Dispatch<ACTIONTYPE>): Promise<void> => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST })
  try {
    setTimeout(() => {
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: [
          {
            id: '0',
            name: 'Articulo 1',
            order: '9855555878',
            sku: '7887555845',
            canReturn: true
          },
          {
            id: '1',
            name: 'Articulo 2',
            order: '9855556327',
            sku: '9922001422',
            canReturn: true
          },
          {
            id: '2',
            name: 'Articulo 3',
            order: '9855556512',
            sku: '9922001422',
            canReturn: true
          },
          {
            id: '3',
            name: 'Articulo 4',
            order: '9855556861',
            sku: '9922001422',
            canReturn: true
          }
        ]
      })
    }, 2000)
  } catch (error) {
    const err = { state: true, status: 500, message: 'Internal Server Error' }
    dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err })
  }
}

export { getProducts }
