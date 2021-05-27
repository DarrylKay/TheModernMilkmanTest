import React, { useEffect, useState } from 'react';
import './ProductsList.scss';
import SingleProduct from '../SingleProduct/SingleProduct';

const ProductsList = ({ products, selectedCategory }) => {
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        setDisplayProducts([]);

        const filterProducts = () => {
            if (selectedCategory === 'All') {
                const allProducts = {
                    title: 'All Products',
                    data: []
                };

                products.forEach(product => {
                    allProducts.data.push(...product.data);
                });

                setDisplayProducts(allProducts);
                return;
            }

            products.forEach(product => {
                if (product.title === selectedCategory) {
                    setDisplayProducts(product);
                }
            });
        };

        filterProducts();
    }, [products, selectedCategory]);

    return (
        <>
            {
                selectedCategory && <h1 className='category-title'>{selectedCategory}</h1>
            }

            <div className="products-container">
                {
                    displayProducts.data ? (displayProducts.data?.map((product, i) => (
                        <SingleProduct key={i} category={selectedCategory} stockCount={product.stock} unitType={product.amount} title={product.title} price={product.price} />

                    ))) : <div className='select-category-message'>Please Select A Category To View Products</div>
                }
            </div>
        </>
    );
};

export default ProductsList;
