import React from "react";

const ResultStore = React.createContext({
   openModal:()=>{},
   onBeginQuizHandler:()=>{},
   notBeginQuizHandler:()=>{},
   confirmRecord: [],
   modification:{},
   modalState: false,
   beginQuiz: false,
   quizItemShow: false,
   isBtnActive:true,
   closeModal: ()=>{},
   setConfirmRecord: ()=>{},
   setQuizItemShow:()=>{},
   hideQuizItemShow: ()=>{},
   clearModification: ()=>{},
   logRecord:[],
   setLogRecord:()=>{},
   clearLogRecord:()=>{}

})

export default ResultStore;