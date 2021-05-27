import React from 'react';
import './CategoryBox.scss';

const CategoryBox = ({ category, setSelectedCategory, selectedCategory }) => {
    return (
        <>
            <div className={`category ${category.title === selectedCategory || selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.title === selectedCategory ? '' : category.title)}>{category.title}</div>
        </>
    )
}

export default CategoryBox
