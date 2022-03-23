import React from 'react'

const ProductInfo = ({product}) => {
  return (
    <div className = "product_info">
        <div className='box'>
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        <h4>Category: {product.category}</h4>
        <button>Add</button>
      </div>
    </div>
  )
}

export default ProductInfo