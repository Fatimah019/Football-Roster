import React, { useRef } from "react";
import styles from "./filepicker.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AppFilePicker = ({ fileName = "No file selected", inValidFile, handleFileChange }) => {
    const fileRef = useRef()
    return (
        <div className={cx({
            file_picker: true,
            error: inValidFile,
        })}>
            <span className={styles.file_name}>{fileName}</span>
            <button onClick={() => fileRef.current.click()} className={cx({
                file_picker_button: true,
                error: inValidFile,
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
