import React, { useRef,memo } from 'react'
import usePagination from '../hooks/usePagination'

const Pagination = ({ totalPages}) => {
    const {
        firstArr, lastArr, isActive, prev, next, jump
    } = usePagination(totalPages)
    const ref = useRef(0)

    return (
        <div className='pagination'>
        <h2>Re-Render {ref.current++}</h2>
            <button onClick={prev}>&laquo;</button>

            {
                firstArr.map(num => (
                    <button key={num} className={`${isActive(num)}`}
                        onClick={() => jump(num)}>
                        {num}
                    </button>
                ))
            }

            {lastArr.length > 0 && <button>...</button>}

            {
                lastArr.map(num => (
                    <button key={num} className={`${isActive(num)}`}
                        onClick={() => jump(num)}>
                        {num}
                    </button>
                ))
            }

            <button onClick={next}>&raquo;</button>
        </div>
    )
}

export default memo(Pagination)