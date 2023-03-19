import React from "react";
import classes from '../CommonDesignSource/ConfigItems.module.css'


function Difficulty(prop){
    const difficulty = ['','easy','medium','difficult'];
  return(

    <div className={classes.config__items}>
        <label>Difficulty Level:  {prop.onDifficultyValue}</label>
        <select  
        name="difficulty"
        id="difficulty" 
        onChange={prop.difficultyHandler}
        defaultValue={prop.onDifficultyValue}>
        {
        difficulty.map((val,index)=>{
        return(

            <option key={index} value={val}>{val}</option>
        )
        })
    }
    </select>

    </div>

  )
           
      
}


export default Difficulty;