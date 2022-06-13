import React from "react";
import styles from "./radios.module.css";

const AppRadioButton = ({ radio_btn_name, radio_input_name, value, checked }) => {
    return (
        <div className={styles.radio_container}>
            <div className={styles.radio_box}>
                <input type="radio" name={radio_input_name} value={value} checked={checked} />
                {
                    radio_btn_name && <span>{radio_btn_name}</span>
                }
            </div>
        </div>
    );
}

export default AppRadioButton;
