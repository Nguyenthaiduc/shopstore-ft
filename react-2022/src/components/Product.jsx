import React,{memo} from 'react'
import ProductCart from './ProductCart'

const Product = ({products}) => {
  return (
    <div className="products">
      {
        products.map(product =>(
          <ProductCart key={product._id} product={product} />
        ))
      }
    </div>
  )
}

export default memo(Product)