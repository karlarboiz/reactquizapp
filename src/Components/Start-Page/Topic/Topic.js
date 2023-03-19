
import React from "react";
import classes from '../CommonDesignSource/ConfigItems.module.css'

function Topic(prop) {
  const topics = ['','geography','science','history','music'];
    return (
      
          <div className={classes.config__items} >
              <label htmlFor="topic">Topic: {prop.onTopicValue}</label>
              <select name="topic" 
              onChange={prop.topicHandler} 
              id="topic" defaultValue={prop.onTopicValue}>
                {
                    topics.map((val,index)=>{
                    return(

                        <option key={index} value={val}>{val}</option>
                    )
                    })
                }
              </select>
          </div>

    )
}

export default Topic