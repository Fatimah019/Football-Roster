import React, { useContext, useEffect, useState } from "react";
import AppButton from "../Button";
import AppFilePicker from "../FilePicker";
import AppModal from ".";
import FileSummaryTable from "../Tables/FileSummary";
import styles from "./styles/importer_dialog.module.css"
import { checkForInvalidInput } from "../../functions/fileCheck";
import { TeamDataContext } from "../../context";
import { csvFileToArray } from "../../functions/csvToArray";


const ImporterDialog = ({ importerModalRef }) => {
    const fileReader = new FileReader();
    const [choosenFileName, setChosenFileName] = useState("No file selected")
    const [fileType, setFileType] = useState("")
    const [isMissingData, setIsMissingData] = useState(false);
    const { loadedData, setLoadedData, setTeamData
    } = useContext(TeamDataContext)
    const [loadedTeamData, setTeamLoadedData] = useState(null)
    const isValidData = isMissingData || !loadedData?.length || choosenFileName === "No file selected"

    const handleFileChange = (e) => {
        const [file] = e.target.files
        file ? setChosenFileName(file?.name) : setChosenFileName("No file selected")
        setFileType(file?.name.split('.').pop())

        fileReader.onload = (e) => {
            const content = e.target.result;
            setTeamLoadedData(content)
            csvFileToArray(content, setLoadedData)
        };

        fileReader.readAsText(file);
    }

    useEffect(() => {
        setIsMissingData(checkForInvalidInput(loadedData, ""))
    }, [loadedData])

    useEffect(() => {
        if (importerModalRef.current.hideModal()) {
            setChosenFileName("No file selected")
        }
    }, [importerModalRef])

    const handleFileImport = (e) => {
        e.preventDefault();
        importerModalRef.current.hideModal()
        csvFileToArray(loadedTeamData, setTeamData)
    };

    return <AppModal modalMaxWidth={styles.importer_modal_wrapper} ref={importerModalRef} modal_head modal_head_title="Importer">
        <div className={styles.importer_modal_body}>
            <div className={styles.importer_modal_body_top} >
                <h3>Roster File</h3>
                <div className={styles.importer_modal_body_file_picker}>
                    <AppFilePicker inValidFile={(fileType !== "csv" && choosenFileName !== "No file selected") || (choosenFileName !== "No file selected" && isMissingData)} fileName={choosenFileName} fileType={fileType} handleFileChange={handleFileChange} />
                </div>
                <div className={styles.importer_modal_body_note}>
                    {
                        isMissingData && choosenFileName !== "No file selected" && fileType === "csv" ?
                            <div className={styles.importer_modal_body_error_block}>
                                <span>Error</span>
                                <span>Your sheet is missing data. Please ensure all cells are filled out.</span>
                            </div>
                            :
                            (choosenFileName === "No file selected" && !loadedData?.length) || (!loadedData?.length && fileType) !== "csv" ?
                                <span className={styles.importer_modal_body_csv_note}>File must be in .csv format</span>
                                :
                                <span className={styles.importer_modal_body_csv_note}>File must be in .csv format</span>
                    }
                </div>

                {
                    !isValidData && fileType === "csv" && <div className={styles.importer_modal_body_file_summary}>
                        <h3>File Summary</h3>
                        <div className={styles.file_summary_table}>
                            <FileSummaryTable />
                        </div>
                    </div>
                }


            </div>

            <div className={styles.importer_modal_body_bottom}>
                <AppButton
                    onClick={(e) => handleFileImport(e)}
                    button_textcolor={isValidData || fileType !== "csv" ? "var(--text-disabled)" : "#fff"}
                    button_text="Import"
                    button_background={isValidData || fileType !== "csv" ? "transparent" : "var(--primary-orange"}
                    disabled={isValidData || fileType !== "csv"}
                />
            </div>
        </div>
    </AppModal>
}

export default ImporterDialog