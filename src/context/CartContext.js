import { createContext, useContext, useReducer } from "react"
import { cartReduucer } from "../reducer/cartReducer"

const initialState = {
    cartList:[],
    total:0
}
//creating Context

const CartContext = createContext(initialState)

//CREATING THE PROVIDER

export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(cartReduucer, initialState)
    //this state- handle multiple state like cartList,total and we can add multiple state
    //dispatch - dispatch is a method that applies on state(ADD_TO_CART, REMOVE_FROM_CART) just like setCounter in useState() 

    const addToCart = (product)=>{
        const updatedCartList = state.cartList.concat(product);
        dispatch({
            type: "ADD_TO_CART",
            payload:{
                products:updatedCartList
            }
        });
        updateTotalPrice(updatedCartList);
    }
    const removeFromCart = (product) => {
        const updatedCartList  = state.cartList.filter(current => current.id !== product.id);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:{
                products: updatedCartList
            }
        });
        updateTotalPrice(updatedCartList);
    }
    const updateTotalPrice = (products) => {
        let total =0;
        products.forEach(product => total =total + product.price)

        dispatch({
            type: "UPDATE_TOTAL_PRICE",
            payload:{
                total
            }
        })
    }
    const value ={
        total:state.total,
        cartList:state.cartList,
        addToCart,
        removeFromCart
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
//3. Consumeing the Context
export const useCart = ()=>{
    const context = useContext(CartContext)
    return context
}