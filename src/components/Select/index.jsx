import React from "react";
import styles from "./select.module.css";
const statusOptions = ["Successful", "fffff", "bbbbb"];

const AppSelect = ({ select_label, defaultValue, value, onSelectChange, name }) => {
    return (
        <div className={styles.select_container}>
            {select_label && <div className={styles.select_label}><label>{select_label}</label></div>}
            <div className={styles.select_box}>
                <select defaultValue={value} onChange={onSelectChange} name={name}>
                    <option value={value}>{value}</option>
                    {
                        statusOptions?.map((option, index) => {
                            return (
                                <option key={index} value={option}>{option}</option>
                            )
                        })
                    }
                    {/* <option value={value}>{value}</option>
                    <option value="Argentinian">Argentinian</option> */}

                </select>
            </div>
        </div>

        //          <FilterCheckedSelect defaultValue="select" onChange={onSelectChange}>
        //     <option value="select">select</option>
        //     {selectOptions.map((options, index) => {
        //       return (
        //         <option key={index} value={options.value}>
        //           {options.label}
        //         </option>
        //       );
        //     })}
        //   </FilterCheckedSelect>
    );
}

export default AppSelect;
