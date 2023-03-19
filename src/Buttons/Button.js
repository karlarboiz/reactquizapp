import React from "react";
import classes from "./Button.module.css"
function Button(props) {

    return (
        <button onClick={props.onClick} disabled={props.disabled} className={classes.button}>
            {props.children}
        </button>
    )
}

export default Button;