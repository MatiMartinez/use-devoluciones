import { useState } from 'react'
import { IError, IUseFetchProps, IUseFetchReturn } from './interface'

const useFetch = (action: IUseFetchProps): IUseFetchReturn => {
  const [loading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<IError>({
    state: false,
    status: 0,
    message: ''
  })

  const handlerAction = async (): Promise<void> => {
    setIsLoading(true)
    try {
      await action()
      setIsLoading(false)
    } catch (error: any) {
      setError(error)
      setIsLoading(false)
    }
  }

  return [loading, error, handlerAction]
}

export default useFetch
