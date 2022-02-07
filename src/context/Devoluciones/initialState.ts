import { IInitialState } from './interface'

const initialState: IInitialState = {
  products: [],
  getProducts: {
    loading: false,
    error: {
      state: false,
      status: 0,
      message: ''
    },
    getProducts: async () => {}
  },
  returnProduct: {
    loading: false,
    error: {
      state: false,
      status: 0,
      message: ''
    },
    returnProduct: async (id: string) => {}
  }
}

export { initialState }
