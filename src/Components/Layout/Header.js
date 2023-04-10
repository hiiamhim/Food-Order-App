import React, { useContext } from "react"
import meals from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"


const Header=props=>{
 
   
return <>
<header className={classes.header}>
    <h1>React Meal</h1>
    <HeaderCartButton onClick={props.cartClick}/>

</header>
<div className={classes['main-image']}>
    <img src={meals} alt="A table full of delicious meals"></img>

</div>

</>
}

export default Header