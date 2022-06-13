import React, { useRef, useEffect, useState } from "react";
import styles from "./actionmenu.module.css";
import { ReactComponent as MoreIcon } from "../../assets/icons/more_icon.svg";

import AppMenu from "./Menu";

const AppActionMenu = ({ children }) => {
    const AppActionRef = useRef(null);
    const [anchorEl, setAnchoeEl] = useState(false);

    const handleClose = (event) => {
        if (AppActionRef.current && !AppActionRef.current.contains(event.target)) {
            setAnchoeEl(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClose);
        return () => {
            document.removeEventListener("click", handleClose);
        };
    }, [AppActionRef, anchorEl]);

    const handleClick = () => {
        setAnchoeEl(!anchorEl);
    };

    return (
        <div ref={AppActionRef} className={styles.app_action_container}>
            <AppMenu open={anchorEl} onClose={() => setAnchoeEl(false)}>
                {children}
            </AppMenu>
            <MoreIcon onClick={handleClick} role="button" className={styles.more_icon_button} />
        </div>

    );
}

export default AppActionMenu;


// import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";
// import styles from "./actionmenu.module.css";
// import { ReactComponent as MoreIcon } from "../../assets/icons/more_icon.svg";

// import AppMenu from "./Menu";

// const AppActionMenu = forwardRef(({ children }, ref) => {
//     // const AppActionRef = useRef(null);
//     const [anchorEl, setAnchoeEl] = useState(false);

//     const handleClose = (event) => {
//         // if (ref.current && !ref.current.contains(event.target)) {
//         //     setAnchoeEl(false);
//         // }
//         setAnchoeEl(false);
//     };

//     useImperativeHandle(ref, () => {
//         return {
//             displayMenu: () => setAnchoeEl(true),
//             hideMenu: () => setAnchoeEl(false)
//         }
//     })

//     useEffect(() => {
//         document.addEventListener("click", handleClose);
//         return () => {
//             document.removeEventListener("click", handleClose);
//         };
//     }, [ref, anchorEl]);

//     const handleClick = () => {
//         setAnchoeEl(!anchorEl);
//     };
//     if (anchorEl)
//         return (
//             <div className={styles.app_action_container}>
//                 <AppMenu open={anchorEl} onClose={() => setAnchoeEl(false)}>
//                     {children}
//                 </AppMenu>
//                 <MoreIcon onClick={handleClick} role="button" className={styles.more_icon_button} />
//             </div>

//         );
// })

// export default AppActionMenu;

