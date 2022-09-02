import React from "react";
import styles from "./styles/appmenu.module.css";

const AppMenuItem = ({ menu_item_icon, menu_item_text, onClick }) => {
	return (
		<div
			className={styles.menu_item_container}
			onClick={onClick}
		>
			<span>{menu_item_icon}</span>
			<span>{menu_item_text}</span>
		</div>);
};

export default AppMenuItem;



