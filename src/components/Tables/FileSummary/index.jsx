import React, { useContext } from "react";
import { TeamDataContext } from "../../../context";
import AppTable from "../../CustomTable";

const defaultData = [
    {
        "default": 0
    },
]

const FileSummaryTable = () => {
    const loadedDataSummary = useContext(TeamDataContext)

    const fileLengthCheck = (teamKey, teamVal) => {
        const data = loadedDataSummary?.loadedData?.filter(item => item[teamKey] === teamVal)?.length
        return data
    }

    return <AppTable
        tableData={
            defaultData &&
            defaultData?.map(
                (data) => data
            )
        }
        columnsData={[
            {
                Header: "Total Players",
                accessor: "Total Players",
                Cell: (data) => {
                    return loadedDataSummary?.loadedData?.length
                },
            },
            {
                Header: "Goalkeepers",
                accessor: "Goalkeepers",
                Cell: (data) => {
                    return fileLengthCheck("Position", "Goalkeeper")
                },
            },
            {
                Header: "Defenders",
                accessor: "Defenders",
                Cell: (data) => {
                    return fileLengthCheck("Position", "Defender")
                },
            },
            {
                Header: "Midfielders",
                accessor: "Midfielders",
                Cell: (data) => {
                    return fileLengthCheck("Position", "Midfielder")
                },
            },
            {
                Header: "Forwards",
                accessor: "Forwards",
                Cell: (data) => {
                    return fileLengthCheck("Position", "Forward")
                },
            },
        ]}
    />
}

export default FileSummaryTable