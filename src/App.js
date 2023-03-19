import React,{useState} from "react";
import Config from "./Components/Start-Page/ConfigQuiz/Config";
import QuizItem from "./Components/QuizItem/QuizItem";
import Modal from "./Modal/Modal";
import ResultStore from './Data/result-context'
import "./styles/app.module.css";

function App() {
  const [confirmRecord,setConfirmRecord] = useState('');
  const [logRecord,setLogRecord] = useState([]);
  const [beginQuiz,setQuizBegin] = useState(true);
  const [modalState,setModalState] = useState(false);
  const [quizItemShow,setQuizItemShow] = useState(false);
  const [modification,setModification] = useState({
    topic: '',
    difficulty:'',
    item: 0,
    isBtnActive: true
  })

  function openModal() {setModalState(true)}
  function closeModal() {setModalState(false)}
  function onBeginQuizHandler() {setQuizBegin(false)}
  function notBeginQuizHandler(){setQuizBegin(true)}
  function clearModification() {
    setModification({
      topic: '',
      difficulty:'',
      item: 0,
      isBtnActive: true
    })
  }

  function logRecordHandler(val){setLogRecord(val)}
  function clearLogRecord(){setLogRecord([])}
  return (
    <ResultStore.Provider value={{
      openModal:openModal,
      closeModal:closeModal,
      beginQuiz: beginQuiz,
      modalState:modalState,
      onBeginQuizHandler: onBeginQuizHandler,
      notBeginQuizHandler: notBeginQuizHandler,
      isBtnActive: modification.isBtnActive,
      setConfirmRecord:(val)=>{setConfirmRecord(val)},
      quizItemShow: quizItemShow,
      setQuizItemShow: ()=> setQuizItemShow(true),
      hideQuizItemShow: ()=> setQuizItemShow(false),
      clearModification: clearModification,
      confirmRecord:confirmRecord,
      logRecord:logRecord,
      setLogRecord: logRecordHandler,
      clearLogRecord:clearLogRecord
    }}>

      {modalState && <Modal 
      onCloseModal={closeModal}/>}
      
      {beginQuiz && <Config 
        modificationSet={setModification}
        />}

      <QuizItem
      modificationSet={modification}
      />
      
    </ResultStore.Provider>
    

  );
}

export default App;
