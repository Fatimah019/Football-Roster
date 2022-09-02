import React from "react";
import styles from "./styles/appmenu.module.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_icon.svg";

const AppMenu = ({ open, children, onClose, ref }) => {
	return <>
		{open &&
			<div className={styles.app_menu_container} ref={ref}>
				<div className={styles.app_menu_container_header} >
					<h3>Actions</h3>
					<CloseIcon onClick={onClose} />
				</div>
				<div className={styles.app_menu_box} onClick={onClose}>{children}</div>
			</div>
		}
	</>;
};

export default AppMenu;



