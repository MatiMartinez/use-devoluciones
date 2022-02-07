import { IError } from 'context/Devoluciones/interface'

type ACTIONTYPE =
  | { type: 'RETURN_PRODUCT_REQUEST' }
  | {
      type: 'RETURN_PRODUCT_SUCCESS'
      payload: { id: string }
    }
  | {
      type: 'RETURN_PRODUCT_FAILURE'
      payload: {
        state: boolean
        status: number
        message: string
      }
    }

interface IReturnProduct {
  loading: boolean
  error: IError
  returnProduct: (id: string) => Promise<void>
}

interface IReturnType extends IReturnProduct {}

export { ACTIONTYPE, IReturnProduct, IReturnType }
