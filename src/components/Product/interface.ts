interface IStyledProduct {
  backgroundColor?: string
}

interface IProductProps extends IStyledProduct {
  id: string
  name: string
  order: string
  imageUrl: string
  canReturn: boolean
  returnProduct?: () => void
}

export type { IStyledProduct, IProductProps }
