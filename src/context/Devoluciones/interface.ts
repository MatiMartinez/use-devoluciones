import { IGetProducts } from './hooks/useProduct/interface'
import { IReturnProduct } from './hooks/useReturn/interface'

interface IProduct {
  id: string
  name: string
  order: string
  sku: string
  canReturn: boolean
}

interface IError {
  state: boolean
  message: string
  status: number
}

interface IInitialState {
  products: IProduct[]
  getProducts: IGetProducts
  returnProduct: IReturnProduct
}

export { IInitialState, IProduct, IError }
