import React from "react";
import styles from "./select.module.css";

const AppSelect = ({ select_label, statusOptions = [], value, onSelectChange, name }) => {
    return (
        <div className={styles.select_container}>
            {select_label && <div className={styles.select_label}><label>{select_label}</label></div>}
            <div className={styles.select_box}>
                <select defaultValue={value} onChange={onSelectChange} name={name}>
                    <option value={value}>{value}</option>
                    {
                        statusOptions?.filter((option) => option !== value)?.map((option, index) => {
                            return (
                                <option key={index} value={option}>{option}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default AppSelect;
