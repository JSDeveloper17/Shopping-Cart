
import { useCart } from "../context/CartContext";
import "./cartcard.css"

export const CartCard = ({product}) => {
  const {name,price,image} = product;
  const { removeFromCart }=useCart()
  return (
    <div className='cartCard'>
        
        <img src={image} alt="nfnc" />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button type="submit" onClick={()=> removeFromCart(product)}>Remove</button>
      
    </div>
  )
}
