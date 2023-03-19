import React from "react";
import classes from '../CommonDesignSource/ConfigItems.module.css'

function ItemNumber(prop){
    return(
        <div className={classes.config__items}>
            <label htmlFor="itemsize">Number of Items:  {prop.onItemNumberValue}</label>
            <input name="itemsize" 
            type="range" 
            onChange={prop.itemHandler} 
            min="0" 
            max="15"
            defaultValue="0"
            step="5"/>
        </div>
    )
}

export default ItemNumber;