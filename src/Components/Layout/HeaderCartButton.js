import { useContext, useState ,useEffect} from "react"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/CartContext"
const HeaderCartButton=props=>{
    const ctx=useContext(CartContext)
    const [ishighlited,setIshighlighted]=useState(false)
    const button =`${classes.button}  ${ishighlited ? classes.bump:''}`
    const numberOfCartItem=ctx.items.reduce((curNum,item)=>{
        return curNum+item.amount
    },0)
    const {items}=ctx
    useEffect(()=>{
        if(items.length===0){
            return 
        }
        setIshighlighted(true)

       const timer= setTimeout(()=>{
            setIshighlighted(false)
        },300)

        return ()=>{  clearTimeout(timer) }
    },[items])
    return <button className={button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
}

export default HeaderCartButton