import React from "react";
import styles from "../styles/player_info.module.css"

export const PlayerInfo = ({ info_name = "height", info_value = "100", info_img = "" }) => {
    return (
        <div className={styles.player_info_sect2_brkdwn}>
            <span>{info_name}</span>
            <span>{info_img && <img src={info_img} alt="info-img" />} {info_value}</span>
        </div>
    )
}

export const PlayerInfo2 = ({ info_name = "height", info_value = "100" }) => {
    return (
        <div className={styles.player_info_sect3_brkdwn}>
            <span>{info_value}</span>
            <span>{info_name}</span>
        </div>
    )
}
