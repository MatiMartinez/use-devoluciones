import { useState } from 'react'
import { IUseLoadingProps, IUseLoadingReturn } from './interface'

const useLoading = (fn: any): IUseLoadingReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleAction = async (): Promise<void> => {
    setIsLoading(true)
    try {
      await fn()
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return { isLoading, handleAction }
}

export default useLoading
