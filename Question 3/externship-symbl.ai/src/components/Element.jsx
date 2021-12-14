import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Items from './Items';

const Element = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3001/get-data").then(res => res.json())
            res.data.sort((a, b) => a.id-b.id)
            setData(res.data);
            setLoading(false);
        }
        fetchData();
    }, [setData, setLoading])
    return (
        <>
            {
                loading ? <Loading /> : <Items data={data}/>
            }
        </>
    )
}

export default Element
