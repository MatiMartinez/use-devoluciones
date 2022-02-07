import { createContext, ReactNode } from 'react'
import { initialState } from './initialState'
import { IInitialState } from './interface'
import useCustomReducer from './useCustomReducer'

const DevolucionesContext = createContext<IInitialState>(initialState)

const DevolucionesProvider = ({ children }: { children: ReactNode }) => {
  const { value } = useCustomReducer()

  return <DevolucionesContext.Provider value={value}>{children}</DevolucionesContext.Provider>
}

export { DevolucionesContext, DevolucionesProvider }
