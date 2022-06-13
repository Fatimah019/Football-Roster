import React, { useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import { TeamDataContext } from "../../context/data";
import PlayerSearch from "../AppSearch";
import AppButton from "../Button";
import ImporterDialog from "../Modals/ImporterDialog";
import styles from "./header.module.css";

const Header = () => {
    const importerModalRef = useRef()
    const location = useLocation()
    const openImporterModal = () => {
        importerModalRef.current.displayModal()
    }

    const data = useContext(TeamDataContext)
    const dataLength = data?.teamData?.length
    return (
        <div>
            <ImporterDialog importerModalRef={importerModalRef} />
            <header className={styles.app_header}>
                <div className={styles.left_app_header}>
                    <span>Roster Details</span>
                    <div className={styles.roaster_details_edit}>
                        <input type="text" value="My Team" />
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
                                onClick={openImporterModal} />
                        </div>
                }

            </header>
        </div>

    );
}

export default Header;
