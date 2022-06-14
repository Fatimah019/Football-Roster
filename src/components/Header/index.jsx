import React, { useRef, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { TeamDataContext } from "../../context/data";
import PlayerSearch from "../AppSearch";
import AppButton from "../Button";
import ImporterDialog from "../Modals/ImporterDialog";
import styles from "./header.module.css";
import { ReactComponent as PenEditIcon } from "../../assets/icons/edit_icon.svg"

const Header = () => {
    const importerModalRef = useRef()
    const location = useLocation()

    const openImporterModal = () => {
        importerModalRef.current.displayModal()
    }

    const [teamNameVal, setTeamNameVal] = useState("My Team");
    const [showPen, setShowPen] = useState(true);

    const onChangeTeamName = evt => {
        setTeamNameVal(evt.target.value);
        setShowPen(false)
    };

    const data = useContext(TeamDataContext)
    const dataLength = data?.teamData?.length
    return (
        <div>
            <ImporterDialog importerModalRef={importerModalRef} />
            <header className={styles.app_header}>
                <div className={styles.left_app_header}>
                    <span>Roster Details</span>
                    <div
                        className={styles.roaster_details_edit}
                        onMouseOver={() => setShowPen(true)}
                        onMouseLeave={() => setShowPen(false)}
                    >
                        <span
                            onChange={onChangeTeamName}
                            contentEditable
                            role="textbox"
                        >
                            {teamNameVal}
                        </span>
                        {
                            showPen && <PenEditIcon />
                        }
                    </div>
                </div>
                {
                    location.pathname !== "/dashboard" ? null :
                        <div className={styles.right_app_header}>
                            <PlayerSearch data={data?.teamData} />
                            <AppButton
                                button_text={`${dataLength ? "Re-Import Team" : "Import Team"}`}
                                button_background={`${dataLength ? "transparent" : "var(--primary-orange)"}`}
                                button_textcolor={`${dataLength ? "var(--text-normal)" : "var(--text-headings)"}`}
                                borderColor={`${dataLength ? "1px solid var(--borders-default)" : "none"}`}
                                onClick={openImporterModal} />
                        </div>
                }

            </header >
        </div >

    );
}

export default Header;
