import React from 'react';
import milkbottle from '../../Assets/milkBottle.png';
import './SingleProduct.scss';

const SingleProduct = ({ title, price, unitType, stockCount }) => {
    return (
        <div className='product'>
            <img className="product-image" src={milkbottle} alt={`${title}`} />
            <div className='product-info-container'>
                <h2 className='product-title'>{title}</h2>
                <p className="product-price">£{Number(price).toFixed(2)} {unitType}</p>
                <p className={`product-stock ${stockCount <= 10 && stockCount > 0 ? 'few' : stockCount === 0 ? 'out' : ''}`}>{stockCount === 0 ? 'Out Of Stock' : stockCount <= 10 ? 'Only A Few Left!' : 'In Stock'}</p>
                <div className={`add-btn ${stockCount === 0 && 'disabled'}`}>Add To Cart</div>
            </div>
        </div>
    )
}

export default SingleProduct;
