import React, { useState } from "react";
import { checkStarterLength } from "../../pages/FormationOverview/formation";
import { PlayerInfo, PlayerInfo2 } from "./component/PlayerInfo";
import TeamPosition from "./component/TeamPosition";
import styles from "./team_field.module.css";

const TeamField = ({ data, dataLength }) => {
	const starter = data?.filter(starter => starter?.Starter === 'Yes');
	const preLoadedInfo = data?.find((team_member) =>
		team_member?.Position === "Goalkeeper" && team_member?.Starter === "Yes")

	const [playerDetail, setPlayerDetail] = useState({
		name: preLoadedInfo && preLoadedInfo["Player Name"],
		jersey: preLoadedInfo && preLoadedInfo["Jersey Number"],
		position: preLoadedInfo?.Position,
		playerImage: preLoadedInfo && preLoadedInfo["Player Image"],
		height: preLoadedInfo?.Height,
		weight: preLoadedInfo?.Weight,
		nationality: preLoadedInfo?.Nationality,
		flagImage: preLoadedInfo && preLoadedInfo["Flag Image"],
		appearances: preLoadedInfo?.Appearances,
		minsPlayed: preLoadedInfo && preLoadedInfo["Minutes Played"],
		goals: preLoadedInfo && preLoadedInfo["Goals "],
		assists: preLoadedInfo?.Assists,
		cleanSheet: preLoadedInfo && preLoadedInfo["Clean Sheets"],
		saves: preLoadedInfo?.Saves
	})

	const mapPlayerPosition = (playerRole) => {
		return starter?.map((player) => {
			return player?.Position === playerRole &&
				<TeamPosition
					player_name={player["Player Name"]}
					player_number={player["Jersey Number"]}
					onClick={() => {
						setPlayerDetail({
							name: player && player["Player Name"],
							jersey: player && player["Jersey Number"],
							position: player?.Position,
							playerImage: player && player["Player Image"],
							height: player?.Height,
							weight: player?.Weight,
							nationality: player?.Nationality,
							flagImage: player && player["Flag Image"],
							appearances: player?.Appearances,
							minsPlayed: player && player["Minutes Played"],
							goals: player && player["Goals "],
							assists: player?.Assists,
							cleanSheet: player && player["Clean Sheets"],
							saves: player?.Saves
						})
					}}
				/>
		})
	}

	const starterPositionCheck =
		checkStarterLength(data, "Goalkeeper") === 1 &&
		checkStarterLength(data, "Defender") === 4 &&
		checkStarterLength(data, "Forward") === 3 &&
		checkStarterLength(data, "Midfielder") === 3

	return <div className={styles.formation_view_wrapper}>
		<div className={styles.field_wrapper}>
			{
				starterPositionCheck &&
				<div className={styles.field_wrapper_inner}>
					<div className={styles.positions}>
						{
							dataLength === 11 &&
							mapPlayerPosition("Goalkeeper")
						}
					</div>
					<div className={styles.positions}>
						{
							dataLength === 11 &&
							mapPlayerPosition("Defender")
						}
					</div>
					<div className={styles.positions}>
						{
							dataLength === 11 &&
							mapPlayerPosition("Midfielder")
						}
					</div>
					<div className={styles.positions}>
						{
							dataLength === 11 &&
							mapPlayerPosition("Forward")
						}
					</div>
				</div>
			}
		</div>

		<div className={styles.player_info}>
			{
				dataLength === 11 && starterPositionCheck &&
				<div className={styles.player_img_sect}>
					<img src={playerDetail?.playerImage} alt="player-img" className={styles.player_image} />
					<div className={styles.player_img_sect_top}>
						<h1>{playerDetail?.jersey}</h1>
						<h1>{playerDetail?.jersey}</h1>
					</div>
					<div className={styles.player_img_sect_bottom}>
						<h3>{playerDetail?.name}</h3>
						<span>{playerDetail?.position}</span>
					</div>
				</div>
			}
			{
				dataLength === 11 && starterPositionCheck &&
				<div className={styles.player_info_sect2}>
					<PlayerInfo info_name="Height" info_value={`${playerDetail?.height} m`} />
					<PlayerInfo info_name="Weight" info_value={`${playerDetail?.weight} kg`} />
					<PlayerInfo info_name="Nationality" info_value={playerDetail?.nationality} info_img={playerDetail?.flagImage} />
				</div>
			}
			<hr />

			<div className={styles.player_info_sect3}>
				{
					dataLength === 11 && starterPositionCheck &&
					<>
						<PlayerInfo2 info_name="Appearances" info_value={playerDetail?.appearances} />
						<PlayerInfo2 info_name="Minutes Played" info_value={playerDetail?.minsPlayed} />
						{
							playerDetail?.position === "Goalkeeper" ?
								<PlayerInfo2 info_name="Clean sheets" info_value={playerDetail?.cleanSheet} /> :
								<PlayerInfo2 info_name="Goals" info_value={playerDetail?.goals} />
						}
						{
							playerDetail?.position === "Goalkeeper" ?
								<PlayerInfo2 info_name="Saves" info_value={playerDetail?.saves} /> :
								<PlayerInfo2 info_name="Assists" info_value={playerDetail?.assists} />
						}
					</>
				}
			</div>
		</div>
	</div>
}

export default TeamField