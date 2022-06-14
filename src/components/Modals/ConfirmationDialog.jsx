import React from "react";
import AppButton from "../Button";
import AppModal from ".";
import styles from "./styles/confirmationDialog.module.css"

const ConfirmationDialog = ({ confirmationModalRef, handleDelete }) => {
    return <AppModal
        modalMaxWidth={styles.confirmation_modal_wrapper}
        ref={confirmationModalRef}
        modal_head modal_head_title="Are you sure?"
        top="108px"
        right="30px"
        left="30px"
        bottom="0"
    >
        <div className={styles.confirmation_modal_body}>
            <div className={styles.confirmation_modal_body_top} >
                <p>This action cannot be undone.</p>
            </div>
            <div className={styles.confirmation_modal_body_bottom}>
                <AppButton
                    button_textcolor={"var(--text-normal)"}
                    button_text="Cancel"
                    button_background={"transparent"}
                    onClick={() => confirmationModalRef.current.hideModal()}
                />
                <AppButton
                    button_textcolor={"var(--text-headings)"}
                    button_text="Delete"
                    button_background={"var(--primary-red)"}
                    onClick={handleDelete}
                />
            </div>
        </div>
    </AppModal>

}

export default ConfirmationDialog