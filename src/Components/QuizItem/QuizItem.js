import React, { useEffect, useState,useContext} from "react";
import QuizItemBody from "../QuizItemBody/QuizItemBody";
import Button from "../../Buttons/Button";
import classes from "./QuizItem.module.css";
import ResultStore from "../../Data/result-context";

function QuizItem(props){
 
  const [answerLog,setAnswerLog] = useState('');
  const [data,setData] = useState('');
  const [index,setIndex] = useState(0);
  const [nextItem,setNextItem] = useState(true);

  const ctx = useContext(ResultStore)

    async function extractData() {
      
     try {
      const response = await  fetch(`https://the-trivia-api.com/api/questions?categories=${props.modificationSet.topic}&limit=${props.modificationSet.item}&difficulty=${props.modificationSet.difficulty}`);
      setData(await response.json());
     
      ctx.setQuizItemShow()
      ctx.onBeginQuizHandler();
     }
     catch(err) {
      if(err) extractData()
     }
    }

    function onNextItemHandler(e){
      const collectedQuizData = {
        question: data[index].question,
        answer: answerLog,
        answerConfirm: answerLog === data[index].correctAnswer,
        correctAnswer: data[index].correctAnswer
      }

      ctx.setLogRecord((previousData)=>[...previousData,collectedQuizData])
      setConditionalStyle(new Array(4).fill(false))
      
      if(index === data.length - 1) {
        ctx.openModal();
        setIndex(0)
      return;}

      setIndex(index + 1);
      setNextItem(true);
      
    }

    const [conditionalStyle,setConditionalStyle] = useState(
      new Array(4).fill(false)
  )
  
    
    useEffect(()=>{
      ctx.setConfirmRecord(ctx.logRecord)
      return()=>{}
    },[ctx.modalState])
    
    return(

      <div className={classes.quiz__item}>
         {
          !ctx.quizItemShow &&  <Button 
          onClick={extractData} 
          disabled={ctx.isBtnActive}
          >
            Start Quiz
          </Button>

         }
        {
          ctx.quizItemShow && <QuizItemBody 
          quizData={data[index]} 
          nextItem={nextItem}
          nextIndex={onNextItemHandler}
          topicIndicator={props.modificationSet.topic}
          nextIndexValue={index}
          quizLength={data.length}
          onNextItem={setNextItem}
          onAnswerLog={setAnswerLog}
          conditionalStyle={conditionalStyle}
          onConditionalStyle={setConditionalStyle}

          />
        }
      </div>
    )
}

export default QuizItem