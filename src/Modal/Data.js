import React,{useContext} from "react";
import ResultStore from "../Data/result-context";
import classes from './Modal.module.css';

const Data = () =>{

    const ctx = useContext(ResultStore);
   return (
    <ul>
    {
      ctx.confirmRecord.map((item,index)=>{
         return (
             <li key={index}>
                <div>
                    <hr></hr>
                    <p className={classes.question}>{item.question}</p>
                    
                    <p>Correct Answer: {item.correctAnswer}</p>
                    <p className={classes.answer}>Your Answer: {item.answer}</p>
                </div>
             </li>
         )
     })
    }
 </ul>
   )
}

export default Data;
