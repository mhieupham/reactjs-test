import React from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const ItemsPrice = cartItems.reduce((a,c)=> a + c.price * c.qty,0);
    const taxPrice = ItemsPrice * 0.10;
    const shippingPrice = ItemsPrice > 2000 ? 0 : 50;
    const totalPrice = ItemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>
            {cartItems && cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x {item.price} = {item.qty * item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            <div>
                ItemsPrice : {ItemsPrice} <br/>
                taxPrice: {taxPrice}<br/>
                shippingPrice: {shippingPrice}<br/>
                totalPrice: {totalPrice}<br/>
            </div>
        </aside>
    )
}