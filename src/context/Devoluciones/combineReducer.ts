import { reducer as useProductsReducer } from './hooks/useProduct'
import { reducer as useReturnReducer } from './hooks/useReturn'

const combineReducers =
  (...slices: any) =>
    (state: any, action: any) => {
      return slices.reduce((newState: any, reducer: any) => reducer(newState, action), state)
    }

const rootReducer = combineReducers(useProductsReducer, useReturnReducer)

export { rootReducer }
