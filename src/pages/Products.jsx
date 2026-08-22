import React from 'react'
import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from '../components'
import { customFetch } from '../utils'

const url = '/products'

export const loader = async ({ request }) => {
  const params = Object.fromEntries(
    new URL(request.url).searchParams.entries()
  )

  const response = await customFetch('/products', {
    params,
  })

  console.log('RESPONSE:', response.data)
  console.log('PRODUCTS:', response.data.data)

  const products = response.data.data
  const meta = response.data.meta

  return { products, meta, params }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products