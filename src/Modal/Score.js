import React,{useContext} from "react";
import ResultStore from "../Data/result-context";
import classes from './Modal.module.css';

const Score = ()=>{
    const ctx = useContext(ResultStore)
    const confirmRecord = ctx.confirmRecord
    const correctAnswers = confirmRecord.filter(val=>val.answerConfirm === true);
    const numberOfItems = confirmRecord.length;
    return (
        <div className={classes.score}>
           <p>Your Score:</p>
           <p>{correctAnswers.length} / {numberOfItems}</p>
        </div>
    )
}

export default Score;