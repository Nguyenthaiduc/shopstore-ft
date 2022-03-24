import { useState, useEffect, useMemo, useRef } from 'react'

import Pagination from '../components/Pagination'
import Products from '../components/Product'
import Sorting from '../components/Sorting'
import { useStore } from '../context/store'
import useQuery from '../hooks/useQuery'

const Home = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(5)

  const ref = useRef(0)

 const {page,sort} = useStore()

  const { data, loading, error } = useQuery(`/products?limit=${limit}&page=${page}&sort=${sort}`
  )

  useEffect(() => {
    if(data?.products) setProducts(data.products)
  }, [data?.products])

  const totalPages = useMemo(() => {
    if(!data?.count) return 0;
    return Math.ceil(data.count / limit)
  }, [data?.count])

  console.log(data)

  return(
    <main>
      <h2>Renders: {ref.current++}</h2>
      <Sorting page={page} sort={sort} />
      <Products products={products} />
      { loading && <h2>Loading...</h2> }
      { error && <h2>{error}</h2> }
      <Pagination totalPages={totalPages} />
    </main>
  )
}

export default Home;