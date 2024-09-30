import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./Productcard.css"

export const ProductCard = ({product}) => {
    const [isInCart, setIsInCart] = useState(false)
    const {id,name,price,image} = product;
    const { cartList,addToCart, removeFromCart} = useCart()

    useEffect(()=>{
        const productIsInCart = cartList.find(cartItem => cartItem.id === id)
        if(productIsInCart){
            setIsInCart(true);
        }else{
            setIsInCart(false);
        }
    }, [cartList,id]);

    return (
        <div className='productCard'>
            <img src={image} alt="product -img"  />
            <p className='name'>{name}</p>
            <div className="action">
            <span>${price}</span>
            {isInCart ?  <button type="submit" className="remove" onClick={()=> removeFromCart(product)}>Remove</button>:
                <button type="submit"  onClick={()=> addToCart(product)}>Add to Cart</button>}
                
            </div>
        </div>
    )
}
