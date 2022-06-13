import React from "react";
import styles from "./button.module.css";

const AppButton = ({
    button_text,
    onClick = () => { },
    button_background,
    button_textcolor,
    borderColor,
    padding,
    disabled,
    button_type
}) => {
    return (
        <button
            onClick={onClick}
            className={styles.button}
            style={{
                backgroundColor: button_background,
                color: button_textcolor,
                border: borderColor,
                padding: padding
            }}
            disabled={disabled}
            type={button_type}
        >
            {button_text}
        </button>
    );
}

export default AppButton;
