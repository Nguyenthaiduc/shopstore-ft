import { useState,useEffect,useMemo,useRef,memo } from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import Product from '../components/Product'
import useQuery from '../hooks/useQuery'
import Pagination from '../components/Pagination'
const Home = () => {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    const {search} = useLocation()
    const ref = useRef(0)
    console.log(search)
    // const [totalPages, setTotalPages] = useState(0)
    const { data, loading, error } = useQuery(`/products?limit=${limit}&page=${page}`)


    useEffect(() => {
        if (data)
            setProducts(data.products)
    }, [data?.products])

    const totalPages =  useMemo(() => {
        if(!data?.count) return 0;

        return  Math.ceil(data.count / limit)
       
    },[data?.count])

    console.log(totalPages)
    console.log(data)

    //

    useEffect(()=>{
        const page = new URLSearchParams(search).get('page') || 1
        setPage(Number(page))
        console.log('%cStop Hãy Đừng Lại , Bạn Đang Bật DevTool!', 'color: red; font-size: 30px; font-weight: bold;');

    },[search])
    return (
        <>
        <h2>Home Render:{ ref.current++}</h2>
            <Product products={products} />
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <Pagination totalPages={totalPages} page={page}/>
        </>
    )

}
export default memo(Home)