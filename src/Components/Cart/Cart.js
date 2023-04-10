import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
import cartContext from "../../store/CartContext"
import { useContext } from "react"
import CartItem from "./CartItem"

const Cart=props=>{
    const ctx=useContext(cartContext)
    const addItemToCart=item=>{
        ctx.addItem(item)

    }
    const removeItemFromcart=id=>{
        ctx.removeItem(id)

    }
    const totalAmount=`${ctx.totalAmount.toFixed(2)}`
    const items=ctx.items.length>0
    const cartItems=<ul className={classes['cart-items']}>
        {ctx.items.map((item=>( <CartItem 
             key={item.id}
             price={item.price} 
             name={item.price} 
             amount={item.amount}
             onRemove={removeItemFromcart.bind(null,item.id)}
             onAdd={addItemToCart.bind(null,item)}
             />)
             ))}</ul>
    return <Modal onClose={props.onClose}> 
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {items && <button className={classes.button}>Order </button>}

        </div>
    </Modal>
}

export default Cart