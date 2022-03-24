import React from 'react'
import useCustomRouter from '../hooks/useCustomRouter';
import {useStore} from '../context/store'
const Sorting = React.memo(() => {
const {page,sort} = useStore()
  const { pushQuery } = useCustomRouter()

  const handleSort = (e) => {
    const { value } = e.target;
    pushQuery({page, sort: value})
  }


  return (
    <div className='sorting'>
      <select onChange={handleSort} value={sort}>
        <option value="-createdAt">Newest</option>
        <option value="createdAt">Oldest</option>
        <option value="-price">Price: Hight-Low</option>
        <option value="price">Price: Low-Hight</option>
      </select>
    </div>
  )
})

export default Sorting