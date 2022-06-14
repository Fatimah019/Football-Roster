import React, { useContext, useEffect, useState } from "react";
import { TeamDataContext } from "../../../context/data";
import { checkForInvalidInput } from "../../../functions/fileCheck";
import AppTable from "../../CustomTable";

const data = [
    {
        name: "hello"
    }
]

const FileSummaryTable = () => {
    const loadedDataSummary = useContext(TeamDataContext)
    // const [goalKeepersLength, setGoalKeepersLength] = useState(0)


    const fileLengthCheck = (teamKey, teamVal) => {
        const data = loadedDataSummary?.loadedData?.filter(item => item[teamKey] === teamVal).length
        // return setGoalKeepersLength(data)
        return data
    }

    // useEffect(() => {
    //     fileLengthCheck("Position", "Goalkeeper")
    //     // setGoalKeepersLength(fileLengthCheck("Position", "Midfielder"))
    // }, [loadedDataSummary?.loadedData])


    // console.log(goalKeepersLength, "leg")



    return <AppTable
        tableData={
            data &&
            data?.map(
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