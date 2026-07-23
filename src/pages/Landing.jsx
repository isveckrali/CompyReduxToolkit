import React from 'react'
import { Hero } from '../components'

const url = "/products?featured=true"
import { customFetch } from "../utils";

export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data
  console.log(response)

  return {products}
}

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  )
}


export default Landing