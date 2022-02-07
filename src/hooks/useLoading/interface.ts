interface IUseLoadingProps {
  fn: () => void
}

interface IUseLoadingReturn {
  isLoading: boolean
  handleAction: () => Promise<void>
}

export { IUseLoadingProps, IUseLoadingReturn }
