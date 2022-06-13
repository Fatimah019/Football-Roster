import React, { useContext, useEffect, useState } from "react";
import AppButton from "../Button";
import AppFilePicker from "../FilePicker";
import AppModal from ".";
import FileSummaryTable from "../Tables/FileSummary";
import styles from "./styles/importer_dialog.module.css"
import { checkForInvalidInput } from "../../functions/fileCheck";
import { TeamDataContext } from "../../context/data";
import { csvFileToArray } from "../../functions/csvToArray";


const ImporterDialog = ({ importerModalRef }) => {
    const fileReader = new FileReader();
    const [choosenFileName, setChosenFileName] = useState("No file selected")
    const [fileType, setFileType] = useState("")
    const [isMissingData, setIsMissingData] = useState(false);
    const tableContext = useContext(TeamDataContext)
    const [loadedData, setLoadedData] = useState(null)
    const dataInfo = useContext(TeamDataContext)

    const handleFileChange = (e) => {
        const [file] = e.target.files
        file ? setChosenFileName(file?.name) : setChosenFileName("No file selected")
        setFileType(file?.name.split('.').pop())

        fileReader.onload = (e) => {
            const content = e.target.result;
            setLoadedData(content)
            csvFileToArray(content, dataInfo.setLoadedData)
        };

        fileReader.readAsText(file);
    }

    useEffect(() => {
        setIsMissingData(checkForInvalidInput(tableContext?.loadedData, ""))
        // console.log(fileType, "filetype")
    }, [tableContext?.loadedData, fileType])

    console.log(isMissingData, "missing")

    const handleFileImport = (e) => {
        e.preventDefault();
        importerModalRef.current.hideModal()
        csvFileToArray(loadedData, tableContext?.setTeamData)
    };

    return <AppModal modalMaxWidth={styles.importer_modal_wrapper} ref={importerModalRef} modal_head modal_head_title="Importer">
        <div className={styles.importer_modal_body}>
            <div className={styles.importer_modal_body_top} >
                <h3>Roster File</h3>
                <div className={styles.importer_modal_body_file_picker}>
                    <AppFilePicker fileName={choosenFileName} fileType={fileType} handleFileChange={handleFileChange} />
                </div>
                <div className={styles.importer_modal_body_note}>
                    {
                        isMissingData && choosenFileName !== "No file selected" ?
                            <div className={styles.importer_modal_body_error_block}>
                                <span>Error</span>
                                <span>Your sheet is missing data. Please ensure all cells are filled out.</span>
                            </div>
                            :
                            choosenFileName === "No file selected" && !tableContext?.loadedData?.length ?
                                <span className={styles.importer_modal_body_csv_note}>File must be in .csv format</span>
                                :
                                <span className={styles.importer_modal_body_csv_note}>File must be in .csv format</span>
                    }
                </div>

                <div className={styles.importer_modal_body_file_summary}>
                    <h3>File Summary</h3>
                    <div className={styles.file_summary_table}>
                        <FileSummaryTable />
                    </div>
                </div>
            </div>

            <div className={styles.importer_modal_body_bottom}>
                <AppButton
                    onClick={(e) => handleFileImport(e)}
                    button_textcolor={isMissingData || !tableContext?.loadedData?.length || choosenFileName === "No file selected" ? "var(--text-disabled)" : "#fff"}
                    button_text="Import"
                    button_background={isMissingData || !tableContext?.loadedData?.length || choosenFileName === "No file selected" ? "transparent" : "var(--primary-orange"}
                    disabled={isMissingData || !tableContext?.loadedData?.length || choosenFileName === "No file selected"}
                />
            </div>
        </div>
    </AppModal>
}

export default ImporterDialog