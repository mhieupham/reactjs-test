import React from 'react';

export default function Header(props) {
    const {cartItems}= props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/">Cart({cartItems.length})</a>
                <a href="#/">SignIn</a>
            </div>
        </header>
    )
}
