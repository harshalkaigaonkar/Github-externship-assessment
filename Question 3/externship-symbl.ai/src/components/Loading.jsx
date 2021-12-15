import React from 'react'

const Loading = ({ error }) => {
    return (
        <div className='img_container'> 
            <img src='loading.gif' alt='Loading...' className='img_main' />
            <p>{error && error}</p>
        </div>
    )
}

export default Loading
