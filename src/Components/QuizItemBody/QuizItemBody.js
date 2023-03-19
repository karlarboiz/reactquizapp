import React, { useState } from "react";
import ItemLength from "./ItemLength";
import Button from "../../Buttons/Button";
import classes from './QuizItemBody.module.css'

function QuizItemBody(props) {
    const combinedAnswers = props.quizData.incorrectAnswers.concat([props.quizData.correctAnswer]);
    combinedAnswers.sort();
    
    const arrConditions = props.conditionalStyle.map(val=>{
        if(val) {
            return classes.picked
        }
        else return classes.unpicked
    });

    function answerHandler(e) {
        props.onNextItem(false)
        props.onAnswerLog(e.target.textContent)

        const findTheArrayIndex = combinedAnswers.findIndex(val => val=== e.target.textContent);
        const updatedCondition = props.conditionalStyle.map((val,index)=>
        index === findTheArrayIndex ? true : false);

        props.onConditionalStyle(updatedCondition);
        
      }

    return (
        <div className={classes.quiz__body}>
            <div classes={classes.quiz__item}>
                <div>
                    <ItemLength 
                    curIndex={props.nextIndexValue} 
                    quizLength={props.quizLength}
                    topicIndicator={props.topicIndicator}/>
                </div>
                <p className={classes.quiz__body__question}>
                {props.quizData.question}
                </p>

                <ul>
                  {
                    combinedAnswers.map((val,index)=>{
                        return (
                            <li 
                            onClick={answerHandler}
                             key={index}
                            className={arrConditions[index]}
                             >
                                {val}
                             </li>
                        )
                    })
                  }
                </ul>
            </div>

            <Button
            disabled={props.nextItem} 
            onClick={props.nextIndex}
            >Next</Button>
        </div>
    )
}

export default QuizItemBody;