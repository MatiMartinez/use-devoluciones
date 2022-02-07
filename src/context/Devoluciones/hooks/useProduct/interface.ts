import { IError, IProduct } from 'context/Devoluciones/interface'

type ACTIONTYPE =
  | { type: 'GET_PRODUCTS_REQUEST' }
  | {
      type: 'GET_PRODUCTS_SUCCESS'
      payload: {
        id: string
        name: string
        order: string
        sku: string
        canReturn: boolean
      }[]
    }
  | {
      type: 'GET_PRODUCTS_FAILURE'
      payload: {
        state: boolean
        status: number
        message: string
      }
    }

interface IGetProducts {
  loading: boolean
  error: IError
  getProducts: () => Promise<void>
}

interface IReturnType extends IGetProducts {
  products: IProduct[]
}

export { ACTIONTYPE, IGetProducts, IReturnType }
