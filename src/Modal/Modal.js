import React, {Fragment,useContext} from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css';
import ResultStore from "../Data/result-context";
import Score from "./Score";
import Data from "./Data";
import img from '../img/restart/restart.jpg';

const Backdrop = () =>{
    return (
        <div className={classes.backdrop}/>
    )
}

const ModalOverlay = () =>{
    const ctx = useContext(ResultStore);
    
    function restartHandler(){
        ctx.hideQuizItemShow();
        ctx.closeModal();
        ctx.notBeginQuizHandler();
        ctx.clearModification();
        ctx.clearLogRecord();
    }

    return(
        <div className={classes.modal}>
            <div className={classes.content}>
                 <Data />
            </div>

            <img src={img} 
            className={classes.restart__img} 
            alt="Restart Button Here"
            onClick={restartHandler}></img>
            
        </div>
    )
}

const portalElement = document.getElementById('modal');

const Modal = () =>{
    
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />,portalElement)}
            {ReactDOM.createPortal(<Score />,portalElement)}
           {ReactDOM.createPortal( <ModalOverlay ></ModalOverlay>,portalElement)}
        </Fragment>
    )
}

export default Modal;