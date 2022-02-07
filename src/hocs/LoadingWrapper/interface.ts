import { ReactNode } from 'react'
import { IError } from 'context/Devoluciones/interface'

interface ILoadingWrapperProps {
  loading: boolean
  error?: IError
  children: ReactNode
}

export { ILoadingWrapperProps }
