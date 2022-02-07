type IUseFetchProps = any

interface IError {
  state: boolean
  message: string
  status: number
}

type IUseFetchReturn = [boolean, IError, () => Promise<void>]

export { IUseFetchProps, IUseFetchReturn, IError }
