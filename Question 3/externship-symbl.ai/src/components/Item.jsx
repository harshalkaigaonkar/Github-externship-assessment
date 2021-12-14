import React from 'react'
import './Item.css'

const Item = ({element}) => {
    return (
        <div className='main_item_container'>
            <p className='main_item_id'> id: {element.id}</p>
            <p className='main_item_name'>name: {element.name}</p>
        </div>
    )
}

export default Item
