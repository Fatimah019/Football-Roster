import React from "react";
import styles from "./select.module.css";

const AppSelect = ({ select_label, value }) => {
    return (
        <div className={styles.select_container}>
            {select_label && <div className={styles.select_label}><label>{select_label}</label></div>}
            <div className={styles.select_box}>
                <select defaultValue={value}>
                    <option value={value}>Argentinian</option>
                    <option>Argentinian</option>
                    <option>Argentinian</option>
                </select>
            </div>
        </div>
    );
}

export default AppSelect;
