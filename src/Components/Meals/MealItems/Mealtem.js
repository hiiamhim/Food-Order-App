import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import { useContext } from "react"
import CartContext from  "../../../store/CartContext"
const MealItem=props=>{
    const ctx=useContext(CartContext)
    const addAmountHandler=(amount)=>{
        ctx.addItem({
            id:props.id,
           name:props.name,
            price:props.price,
            amount:amount
        })

    }
    const price=`$${props.price.toFixed(2)}`
    return <li className={classes.meal}>
        <div className={classes.title}><h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm addAmount={addAmountHandler}></MealItemForm>
        </div>
    </li>
}

export default MealItem