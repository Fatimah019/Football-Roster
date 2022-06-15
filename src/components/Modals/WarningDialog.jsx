import React from "react";
import AppModal from ".";
import styles from "./styles/warningDialog.module.css"
import { ReactComponent as WarningIcon } from "../../assets/icons/warning_icon.svg";

const WarningDialog = ({ warningModalRef, title, message }) => {
    return <AppModal
        modalMaxWidth={styles.warningModalRef_modal_wrapper}
        ref={warningModalRef}
    >
        <div className={styles.warning_modal_body}>

            <div className={styles.warning_modal_body_top} >
                <WarningIcon />
                <h3>{title}</h3>
            </div>

            <div className={styles.warning_modal_body_bottom} >
                <p>{message}</p>
            </div>
        </div>
    </AppModal>

}

export default WarningDialog