import React from 'react';
import { useSelector } from 'react-redux';

import { AppState, IProduct } from '../interfaces';
import Product from './product';


const ProductList: React.FC = () => {
    const products: IProduct[] | null = useSelector((state: AppState) => state.products);
    
    return (
        <div className="product-list">
      {products && products.map((product, index) => <Product product={product} showMore={true} key={index}/>)}
    </div>
    );
};




export default ProductList;
