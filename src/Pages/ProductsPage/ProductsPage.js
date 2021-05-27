import React, { useEffect, useState } from 'react';
import './ProductsPage.scss';
import CategoryBox from '../../Components/CategoryBox/CategoryBox';
import ProductsList from '../../Components/ProductsList/ProductsList';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Actions/ProductActions';

const ProductsPage = () => {
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    const state = useSelector(state => state.products);
    const { loading, error, products } = state;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const createCategories = () => {
        return products.map((product, i) =>
            <CategoryBox key={i} category={product} selectedCategory={category} setSelectedCategory={setCategory} />
        );
    };

    const clearSelectionHandler = () => {
        setCategory('');
    };

    const allSelectionHandler = () => {
        setCategory('All');
    };

    return (
        <div className="container" >
            {
                loading ? <h2>Loading...</h2> : error ? <h2>{error.message}</h2> :
                    (<>
                        <div className="categories-column">
                            <div className="categories">
                                {createCategories()}
                            </div>

                            <Button btnClick={allSelectionHandler} text='Select All' type='select' />
                            <Button btnClick={clearSelectionHandler} text='Clear' type='clear' />
                        </div>
                        <div className="products-section">
                            <ProductsList products={products} selectedCategory={category} />
                        </div>
                    </>)
            }
        </div >
    );
};

export default ProductsPage;
