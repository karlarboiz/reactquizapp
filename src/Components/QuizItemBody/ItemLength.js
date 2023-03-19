import React,{Fragment} from "react";
import classes from './QuizItemBody.module.css'

function ItemLength(props) {

    return(
       <Fragment>
            <div className={classes.item__length}>
                <p>{props.curIndex +1} / {props.quizLength}</p>
                <p>{props.topicIndicator.toUpperCase()}</p>
            </div>
        </Fragment>
    )
}

export default ItemLength;