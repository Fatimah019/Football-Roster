import React, { useEffect, useState } from "react";
import AppButton from "../Button";
import AppModal from ".";
import styles from "./styles/playeredit.module.css"
import AppInput from "../Input";
import AppSelect from "../Select";
import AppRadioButton from "../Radios";

const PlayerEditDialog = ({ playerEditModalRef, data, id, updatedData = [], setUpdatedData = () => { } }) => {
    const [playerData, setPlayerData] = useState(data)

    const handleEditPlayer = () => {
        playerEditModalRef.current.hideModal()
        const newData =
            updatedData?.map((item, index) => (index === Number(id)) ? { ...playerData } : item)

        setUpdatedData(newData)
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

    return <AppModal ref={playerEditModalRef} modal_head modal_head_title="Edit Player" modalMaxWidth={styles.playeredit_modal_wrapper}>
        <div className={styles.playeredit_modal_body}>
            <div className={styles.playeredit_modal_body_top} >
                <form>
                    <div className={styles.input_unequal_dual_div}>
                        <AppInput name="playerName" value={playerData["Player Name"]} input_label="Player Name" onChange={handleEditInputChange} />
                        <AppInput name="Jersey Number" value={playerData["Jersey Number"]} input_label="Jersey Number" onChange={handleEditInputChange} />
                    </div>
                    <div className={styles.input_equal_dual_div}>
                        <AppInput name="Height" value={playerData?.Height} input_label="Height" onChange={handleEditInputChange} />
                        <AppInput name="Weight" value={playerData?.Weight} input_label="Weight" onChange={handleEditInputChange} />
                    </div>
                    <AppSelect select_label="Nationality" value={playerData?.Nationality} onChange={handleEditInputChange} />
                    <AppSelect select_label="Position" value={playerData?.Position} onChange={handleEditInputChange} />

                    <div className={styles.radio_inputs}>
                        <div className={styles.radio_label}>
                            <label>Starter</label>
                        </div>
                        <div className={styles.radio_buttons}>
                            <AppRadioButton radio_btn_name="starter" radio_input_name="No" value="No" checked="checked" />
                            <AppRadioButton radio_btn_name="starter" radio_input_name="Yes" value="Yes" />
                        </div>
                    </div>
                </form>
            </div>
            <div className={styles.player_edit_modal_body_bottom}>
                <AppButton button_textcolor={"var(--text-disabled)"} button_text="Edit Player" button_background={"transparent"} onClick={handleEditPlayer} />
                {/* <AppButton button_textcolor={"var(--text-headings)"} button_text="Edit Player" button_background={"var(--primary-orange)"} /> */}
            </div>
        </div>
    </AppModal>
}

export default PlayerEditDialog