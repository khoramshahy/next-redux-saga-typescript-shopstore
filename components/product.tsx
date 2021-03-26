import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRates } from '../redux/action';
import { AppState, IProduct, IRates } from '../interfaces';
import Link from 'next/link';

interface IProps {
    product?: IProduct;
    showMore: boolean
}

const Product: React.FC<IProps> = (props) => {
    const [currency, setCurrency]  = React.useState('usd');
    const { product, showMore } = props;
    const dispatch = useDispatch();

    const rates = {EUR:0.8473140146,JPY:109.0916793764,GBP:0.7292662261};

    useEffect(()=>{
        setCurrency(window.localStorage.getItem('currency')|| 'usd')
    })

    
    const onchangeCurrency = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const curr = event.target.value;
        window.localStorage.setItem('currency', curr);
        setCurrency(curr);
    };

    const onPrice = ()=> {
        if(currency === 'EUR')
        return rates.EUR
        if(currency === 'JPY')
        return rates.JPY
        if(currency === 'GBP')
        return rates.GBP

        return 1

    }

    return (
        <>
            {product && <div className="product">
                <h2 className="product__title">{product.title}</h2>
                <p className="product__description">{product.description}</p>
                <img src={product.image} alt="" className="product__image" />
                <div className="product__price-button-container">
                    <div className="product__price">{(product.price*onPrice())?.toFixed(2)} {currency}</div>
                    {showMore && <Link href={{pathname:`/${product.id}`, query: {object: JSON.stringify(product)}}} >
                        <a>more ...</a>
                    </Link>}
                     {!showMore && <select name="cars" id="cars" onChange={onchangeCurrency} value={currency}>
                        <option value="USD">$</option>
                        <option value="EUR">€</option>
                        <option value="JPY">¥</option>
                        <option value="GBP">£</option>
                    </select>}
                </div>
                {!showMore && <Link href={{pathname:'/'}} >
                        <a>home page</a>
                    </Link>}
            </div>}
        </>
    );
};

export default Product;
