import { useContext } from 'react'
import { DevolucionesContext } from 'context/Devoluciones/context'
import { IReturnType } from './interface'

const useReturn = (): IReturnType => {
  const context = useContext(DevolucionesContext)
  if (context === undefined) {
    throw new Error('useReturn must be used within and Provider')
  }

  return context.returnProduct
}

export { reducer } from './reducer'
export { returnProduct } from './actionCreator'
export { useReturn }
