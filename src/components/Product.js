import react from 'react';

export default function Product(props) {
    const {product,onAdd} = props;
    return (
        <div style={{
            'display':'flex',
            'flexDirection':'column'
        }}>
            <img className="small" src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={()=>onAdd(product)} className={'button'}>Add to cart</button>
            </div>
        </div>
    );
}