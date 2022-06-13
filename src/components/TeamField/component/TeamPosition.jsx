import React from "react";
import styles from "../styles/team_position.module.css"

const TeamPosition = ({ player_number = "01", player_name = "player name", onClick = () => { } }) => {
    return (
        <div className={styles.player_position} onClick={onClick}>
            <span>{player_number}</span>
            <p>{player_name}</p>
        </div>
    )
}

export default TeamPosition