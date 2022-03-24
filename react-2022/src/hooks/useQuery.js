import React, { useState, useEffect } from 'react'
import axios from 'axios'
const useQuery = (url) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        console.log("query");
        let here = true //cai nay tranhs truong hop bam vao roi thoat ra

        setLoading(true)

        axios.get(url)
            .then(res => {
                if (!here) return;
                setData(res.data)
            })
            .catch(err => {
                if (!here) return;
                setError(err.response.data.msg)

            })
            .finally(() => {
                if (!here) return;
                setLoading(false)
            })

    }, [url])
    return { data, loading, error }
}

export default useQuery