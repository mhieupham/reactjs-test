import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
import './index.css'
import {useState} from "react";

const data = {
    products: [
        {
            id: '1',
            name: 'OPPO Reno6 Z 5G',
            price: 1400,
            image: 'https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg'
        },
        {
            id: '2',
            name: 'iPhone 12 Pro Max 128GB',
            price: 1600,
            image: 'https://cdn.tgdd.vn/Products/Images/42/213033/TimerThumb/iphone-12-pro-max-(4).jpg'
        },
        {
            id: '3',
            name: 'Samsung Galaxy S20 FE (8GB/256GB)',
            price: 2400,
            image: 'https://cdn.tgdd.vn/Products/Images/42/224859/TimerThumb/samsung-galaxy-s20-fan-edition-(2).jpg'
        },
    ]
}

function App() {
    const {products} = data;
    const [cartItems, setCartItem] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id == product.id);
        if (exist) {
            setCartItem(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
        } else {
            setCartItem([
                ...cartItems,
                {
                    ...product,
                    qty: 1
                }
            ])
        }
        console.log(cartItems);
    }
    const onRemove = (product) => {
        const exist = cartItems.find((x)=> x.id === product.id);
        if (exist.qty === 1) {
            setCartItem(cartItems.filter(x => x.id != product.id));
        } else {
            setCartItem(cartItems.map(x => x.id === product.id ? {...exist,qty: exist.qty - 1}: x)) ;
        }
    }

    return (
        <div className="App">
            <Header cartItems={cartItems}></Header>
            <div className="row">
                <Main onAdd={onAdd} products={products}></Main>
                <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
            </div>
        </div>
    );
}

export default App;
