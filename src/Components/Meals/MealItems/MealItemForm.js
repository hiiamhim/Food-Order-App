import classes from "./MealIemForm.module.css"
import Input from "../../UI/Input.js"
import { useRef ,useState} from "react"
const MealItemForm=props=>{
    const [amountValid,setAmountValid]=useState(true)
    const amountref=useRef()
    const formSubmit=event=>{
        event.preventDefault()
        const amountInNumber=Number(amountref.current.value)
        if(amountInNumber===0 || amountInNumber<1 || amountInNumber>5){
            setAmountValid(false)
            return 
        }
        props.addAmount(amountInNumber)
    }
    return <>
    
    <form className={classes.form} onSubmit={formSubmit}>
        <Input label="Amount"  ref={amountref} input={{
           
            id:`amount_+${props.id}`,
            type:"number",
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'

        }}/>
        <button>+ Add</button>
    </form>
    {!amountValid && <h1>Please enter a valid amount (1-5)</h1>}
    </>
}

export default MealItemForm