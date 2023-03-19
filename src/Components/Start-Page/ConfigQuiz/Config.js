import React, { useEffect, useState,useReducer,Fragment } from "react";
import ItemNumber from "../ItemNumber/ItemNumber"; 
import Topic from "../Topic/Topic";
import Difficulty from "../Difficulty/Difficulty";
import classes from './Config.module.css'

function topicReducer(state,action){
  switch (action.type) {
    case 'set':
      return {topic: action.topic,isPresent: action.topic !== ''};
  
    default:
      return {topic: state.topic,
        isPresent: false};
  }
  
}

function difficultyReducer(state,action){
  switch (action.type) {
    case 'set':
      return {difficulty: action.difficulty,
        isPresent: action.difficulty !== ''};
  
    default:
      return {difficulty: state.difficulty,
        isPresent: false};
  }
  
}

function itemNumberReducer(state,action){
  switch (action.type) {
    case 'set':
      return {itemNumber: action.itemNumber,
        isPresent: action.itemNumber > 0};
  
    default:
      return {itemNumber: state.itemNumber,
        isPresent: false};
  }
  
}

function Config(props) {     
      const [activeBtn,setActiveBtn] = useState(true);

      const [topicState,dispatchTopic] = useReducer(topicReducer,{
          topic: '',
          isPresent: false
        })

      const [difficultyState,dispatchDifficulty] = useReducer(difficultyReducer,{
        difficulty: '',
        isPresent: false
      })

      const [itemNumberState,dispatchItemNumber] = useReducer(itemNumberReducer,{
        itemNumber: 0,
        isPresent: false
      })

      function topicHandler(e) {
        dispatchTopic({type: "set",topic: e.target.value})
      }
      
      function difficultyHandler(e) {
        dispatchDifficulty({type: "set",difficulty: e.target.value})
      }

      function numberOfItemsHandler(e) {
        dispatchItemNumber({type: "set",itemNumber: e.target.value})
      }

      function activeBtnHandler() {
        if(topicState.isPresent &&
        difficultyState.isPresent&&
        itemNumberState.isPresent) return false

        else return true
      }

      useEffect(()=>{

        setActiveBtn(activeBtnHandler)
        
        props.modificationSet({
          topic: topicState.topic,
          difficulty: difficultyState.difficulty,
          item: itemNumberState.itemNumber,
          isBtnActive: activeBtn
        })
        return()=>{}

      },[topicState.topic, difficultyState.difficulty,itemNumberState.itemNumber,activeBtn])

return (
  <div className={classes.config}>
      <Topic 
    topicHandler={topicHandler} 
    onTopicValue={topicState.topic}
      />
    <Difficulty 
    difficultyHandler={difficultyHandler}
    onDifficultyValue={difficultyState.difficulty}  
    />
    <ItemNumber 
    itemHandler={numberOfItemsHandler}
    onItemNumberValue={itemNumberState.itemNumber}/>
  </div>
 
 

)
}

export default Config;