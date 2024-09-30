//state  - information about cart and cartList items

/*Action - 
1.Type - perform something(what we need to perform) that information stored in type
    like addToCart, removeFromCart.
2.payload -     value at the perticular moment (product information stored in payload)
    like if i say addToCart -which product i add to cart*/

export const cartReduucer = (state, action) =>{
    const {type, payload} = action;

    switch(type){
        case "ADD_TO_CART":
            return {...state, cartList:payload.products }
        
        case "REMOVE_FROM_CART":
            return {...state, cartList:payload.products}
        
        case "UPDATE_TOTAL_PRICE":
            return {...state, total:payload.total}
        default:
            throw new Error("No Case found In CartReducer");
}
}

