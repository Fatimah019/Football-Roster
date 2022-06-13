import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./modals.module.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_icon.svg";
import ReactDOM from "react-dom";

const AppModal = forwardRef(({
    children,
    modal_head,
    modal_head_title,
    modalMaxWidth
}, ref) => {
    const [openModal, setOpenModal] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            displayModal: () => setOpenModal(true),
            hideModal: () => setOpenModal(false)
        }
    })

    const handleClose = (event) => {
        // if (ref.current && !ref.current.contains(event.target)) {
        //     setOpenModal(false);
        // }
        setOpenModal(false);
    };

    // useEffect(() => {
    //     if (ref.current) document.addEventListener("click", handleClose);
    //     return () => {
    //         document.removeEventListener("click", handleClose);
    //     };
    // }, [openModal, ref]);

    // const hanldeCloseModaLFromOutside = () => {
    //     if (openModal && ref.current) {
    //         // onClose();
    //         console.log("hello")
    //         setOpenModal(false)
    //     }
    // };

    // useEffect(() => {
    //     // if (openModal && ref.current && !ref.current.contains)
    //     // document.addEventListener("click", hanldeCloseModaLFromOutside);
    //     // return () => {
    //     //     document.removeEventListener("click", hanldeCloseModaLFromOutside);
    //     // };
    //     if (openModal) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }
    // }, [openModal]);

    if (openModal) {
        return ReactDOM.createPortal(
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_backdrop}>
                    <div className={`${styles.modal_box} ${modalMaxWidth}`}>
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

