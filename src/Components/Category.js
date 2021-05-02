import React from 'react';

const Category = ({filter, categories}) => {
    return (
        <div className="buttons">
            {
                categories.map((category, index) =>{
                    return <button className="btn-project" key={index} onClick={() =>filter(category)}>{category}</button>
                })
            }
        </div>
    );
};

export default Category;