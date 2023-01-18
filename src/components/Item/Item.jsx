import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ name, image, price, id }) => {   
    return (
        <div className='col'>
            <div className='card cardStyle'>
                <img src={image} alt={name} className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p>{price}</p>
                    
                    <Link to={`/item/${id}`} className='btn btn_ver_mas'>Ver más</Link>
                </div>
            </div>
        </div>
    )
}

export default Item
