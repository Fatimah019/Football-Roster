import React from "react";
import styles from "./radios.module.css";

const AppRadioButton = ({ radio_btn_name, radio_input_name, value, checked, id, onChange }) => {
    return (
        <div className={styles.radio_container}>
            <div className={styles.radio_box}>
                <input type="radio" name={radio_input_name} id={id} value={value} checked={checked} onChange={onChange} />
                {
                    radio_btn_name && <label htmlFor={id}><span></span>{radio_btn_name}</label>
                }
            </div>
        </div>
    );
}

export default AppRadioButton;
