import React from "react";
import styles from "./button.module.css";

const AppButton = ({ button_text, onClick = () => { }, button_background, button_textcolor, disabled }) => {
    return (
        <button onClick={onClick} className={styles.button} style={{ backgroundColor: button_background, color: button_textcolor }} disabled={disabled}>{button_text}</button>
    );
}

export default AppButton;
