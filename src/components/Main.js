import React from 'react';
import Product from './Product'
export default function Main(props) {
    const {products,onAdd} = props;
    return (
        <main className="block col-2">
            <h2>
                Products
            </h2>
            <div className="row">
                {products && products.map((product)=> (
                    <Product onAdd={onAdd} key={product.id} product={product}></Product>
                ))}
            </div>
        </main>
    )
}