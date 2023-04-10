import { useReducer } from "react"
import CartContext from "./CartContext"
const defaultCart={
    
        items:[],
        totalAmount:0
    
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const UpdatedTotalAmount=action.item.price*action.item.amount+state.totalAmount
        const existingItemIndex=state.items.findIndex(item=>item.id===action.item.id)
        const existingItem=state.items[existingItemIndex]
        let updatedItems;

        if(existingItem){
            let updatedItem={
                ...existingItem,
                amount:state.items[existingItemIndex].amount+action.item.amount
            }
           
            updatedItems=[...state.items]
            updatedItems[existingItemIndex]=updatedItem
        }
        else{
            updatedItems=state.items.concat(action.item)

        }
       
        
        
        return {
            items:updatedItems,
            totalAmount:UpdatedTotalAmount
        }
    }

    if(action.type==='REMOVE'){
        let totalAmount;
        let updatedItems;
        let updatedItem;
        const existingItemIndex=state.items.findIndex(item=>item.id===action.id)
        const existingItem=state.items[existingItemIndex]
        if(existingItem.amount===1){
        updatedItems=state.items.filter(item=>item.id!==action.id)
       
        }
        else{
           updatedItem={...existingItem,amount:existingItem.amount-1}
           updatedItems=[...state.items]
           updatedItems[existingItemIndex]=updatedItem

        }
        totalAmount=state.totalAmount-existingItem.price
        return {
            items:updatedItems,
            totalAmount:totalAmount
        }
    }
    return defaultCart
}


const CartProvider=props=>{
    const [cartState,dispatchCart] =useReducer(cartReducer,defaultCart)
    const addItemToCart=item=>{
       
        dispatchCart({type:'ADD',item:item})

    }
    const removeItemCart=id=>{
        dispatchCart({type:'REMOVE',id:id})

    }

    const CartValue={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCart,
        removeItem:removeItemCart
    }
    
    return <CartContext.Provider value={CartValue}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider