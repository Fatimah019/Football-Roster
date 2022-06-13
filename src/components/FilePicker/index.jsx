import React, { useRef } from "react";
import styles from "./filepicker.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AppFilePicker = ({ fileName = "No file selected", fileType = "", handleFileChange }) => {
    const fileRef = useRef()
    return (
        <div className={cx({
            file_picker: true,
            valid: fileType === "",
            error: fileType !== "csv" && fileName !== "No file selected",
        })}>
            <span className={styles.file_name}>{fileName}</span>
            <button onClick={() => fileRef.current.click()} className={cx({
                file_picker_button: true,
                valid: fileType === "",
                error: fileType !== "csv" && fileName !== "No file selected",
            })}>Select File</button>

            <form>
                <input
                    type="file"
                    ref={fileRef}
                    multiple={false}
                    onChange={handleFileChange}
                    hidden
                />
            </form>
        </div>
    );
}

export default AppFilePicker;
