import { FC, ReactElement } from 'react'
import { ILoadingWrapperProps } from './interface'

const LoadingWrapper: FC<ILoadingWrapperProps> = ({ loading, error, children }): ReactElement => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error?.state) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return <>{children}</>
}

export default LoadingWrapper
