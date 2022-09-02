import React, { useContext, useEffect, useState } from "react";
import AppButton from "../Button";
import AppModal from ".";
import styles from "./styles/playeredit.module.css"
import AppInput from "../Input";
import AppSelect from "../Select";
import AppRadioButton from "../Radios";
import { TeamDataContext } from "../../context";
import { checkForDuplicateData } from "../../functions/fileCheck";


const PlayerEditDialog = ({ playerEditModalRef, data, id }) => {
    const [playerData, setPlayerData] = useState(data)
    const { searchedData, setSearchedData, teamData, setTeamData } = useContext(TeamDataContext)

    const handleEditPlayer = () => {
        playerEditModalRef.current.hideModal()
        const dataCheck = searchedData?.length ? searchedData : teamData
        const newData =
            dataCheck?.map((item, index) =>
                (index === Number(id)) ? { ...playerData } : item)

        searchedData?.length ?
            setSearchedData(checkForDuplicateData(newData)) :
            setTeamData(checkForDuplicateData(newData))
    }

    const handleEditInputChange = (e) => {
        setPlayerData({
            ...playerData,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        setPlayerData(data);
    }, [data]);

    return <AppModal
        ref={playerEditModalRef}
        modal_head modal_head_title="Edit Player"
        modalMaxWidth={styles.playeredit_modal_wrapper}
        closeModalFromOutdide
    >
        <div className={styles.playeredit_modal_body}>
            <div className={styles.playeredit_modal_body_top} >
                <form>
                    <div className={styles.input_unequal_dual_div}>
                        <AppInput name="Player Name" value={playerData["Player Name"]} input_label="Player Name" onChange={handleEditInputChange} />
                        <AppInput name="Jersey Number" value={playerData["Jersey Number"]} input_label="Jersey Number" onChange={handleEditInputChange} />
                    </div>
                    <div className={styles.input_equal_dual_div}>
                        <AppInput name="Height" value={playerData?.Height} input_label="Height" onChange={handleEditInputChange} />
                        <AppInput name="Weight" value={playerData?.Weight} input_label="Weight" onChange={handleEditInputChange} />
                    </div>
                    <AppSelect name={"Nationality"}
                        select_label="Nationality"
                        value={playerData?.Nationality}
                        onSelectChange={handleEditInputChange}
                        statusOptions={["Brazilian", "Nigerian"]}
                    />
                    <AppSelect
                        name={"Position"}
                        select_label="Position"
                        value={playerData?.Position}
                        onSelectChange={handleEditInputChange}
                        statusOptions={["Goalkeeper", "Defender", "Forward", "Midfielder"]}
                    />

                    <div className={styles.radio_inputs}>
                        <div className={styles.radio_label}>
                            <label>Starter</label>
                        </div>
                        <div className={styles.radio_buttons}  >
                            <AppRadioButton id="No" radio_btn_name="No" value="No" radio_input_name="Starter" onChange={handleEditInputChange} checked={playerData?.Starter === "No"} />
                            <AppRadioButton id="Yes" radio_btn_name="Yes" value="Yes" radio_input_name="Starter" onChange={handleEditInputChange} checked={playerData?.Starter === "Yes"} />
                        </div>
                    </div>
                </form>
            </div>
            <div className={styles.player_edit_modal_body_bottom}>
                <AppButton
                    button_textcolor={Object.values(playerData).includes("") ? "var(--text-disabled)" : "var(--text-headings)"}
                    button_text="Edit Player"
                    button_background={Object.values(playerData).includes("") ? "transparent" : "var(--primary-orange)"}
                    onClick={handleEditPlayer}
                    disabled={Object.values(playerData).includes("")}
                />
            </div>
        </div>
    </AppModal>
}

export default PlayerEditDialog
