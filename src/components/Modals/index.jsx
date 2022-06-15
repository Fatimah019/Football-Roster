import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./modals.module.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_icon.svg";
import ReactDOM from "react-dom";

const AppModal = forwardRef(({
    children,
    modal_head,
    modal_head_title,
    modalMaxWidth,
    left,
    right,
    bottom,
    top,
    closeModalFromOutdide
}, ref) => {
    const [openModal, setOpenModal] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            displayModal: () => setOpenModal(true),
            hideModal: () => setOpenModal(false)
        }
    })

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [openModal])

    if (openModal) {
        return ReactDOM.createPortal(
            <div className={styles.modal_wrapper}
                onClick={() => closeModalFromOutdide && setOpenModal(false)}
                style={{ left: left, right: right, top: top, bottom: bottom }}>
                <div className={styles.modal_backdrop}>
                    <div className={`${styles.modal_box} ${modalMaxWidth}`} onClick={e => e.stopPropagation()}>
                        {
                            modal_head && <div className={styles.modal_head}>
                                <h3>{modal_head_title}</h3>
                                <CloseIcon onClick={() => setOpenModal(false)} />
                            </div>
                        }
                        {children}
                    </div>
                </div>
            </div>, document.getElementById("app-modal")
        )
    }
    return null
});

export default AppModal;

