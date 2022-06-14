import React from "react";
import styles from "./input.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";

const AppInput = ({ input_type, name, placeholder, value, onChange, input_icon, search_end_text, input_label, handleSearch = () => { } }) => {

    return (
        <div className={styles.input_container}>
            {input_label && <div className={styles.input_label}><label>{input_label}</label></div>}
            <div className={styles.input_box}>
                <div className={styles.left_input_box}>
                    {
                        input_icon && <SearchIcon />
                    }
                    <input name={name} type={input_type} placeholder={placeholder} value={value} onChange={onChange} />
                </div>
                {
                    search_end_text && search_end_text
                }

            </div>
        </div>
    );
}

export default AppInput;
