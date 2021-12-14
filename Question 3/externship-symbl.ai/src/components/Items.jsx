import React from 'react'
import Item from './Item'

const Items = ({data}) => {
    return (
        <div className='main_content'>
            <h1>Items Are..</h1>
            <div className='main_content_items'>
                {data.map(element => (
                    <Item element={element} key={element.id} />
                ))}
            </div>
        </div>
    )
}

export default Items
