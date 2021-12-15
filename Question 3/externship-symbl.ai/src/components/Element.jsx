import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Items from './Items'

const Element = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        function fetchData() {
            fetch("http://localhost:3001/get-data")
            .then(res => res.json())
            .then(res => {
                if(res.data) {
                    res.data.sort((a, b) => a.id-b.id)
                    setData(res.data)
                    setLoading(false)
                } else {
                    setError('Server Error')
                }
            })
            .catch(err => setError(`Error due to ${err.message}`))
        }
        fetchData();
    }, [setData, setLoading, setError])
    return (
        <>
            {
                loading ? <Loading error={error} /> : <Items data={data}/>
            }
        </>
    )
}

export default Element
