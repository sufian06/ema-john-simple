import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    const {handleAddToCart} = props;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
           </div>
           <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
            <p>Add to Cart</p>
           </button>
        </div>
    );
};

export default Product;