import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductInfo'
import useQuery from '../hooks/useQuery'
const ProductDetail = () => {
  const { id } = useParams()
  // const [product, setProduct] = useState()
  const {data:product,loading,error} = useQuery(`/products/${id}`)
  console.log(useParams)
  console.log(product)



  return (
    <div className="product_info">
      {product && <ProductInfo product={product} />}
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
    </div>
  )
}

export default ProductDetail