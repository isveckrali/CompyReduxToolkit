import React from 'react'
import { customFetch, formatPrice } from '../utils'
import { useLoaderData } from 'react-router-dom'


export const loader = async({params}) => {
  const response = await customFetch(`/products/${params.id}`)

  return {product: response.data.data}
}

const SingleProduct = () => {
  const {product } = useLoaderData()
  const {image, title, price, description, colors, company } = product.attributes 
  const dollarsAmount = formatPrice(price)
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct