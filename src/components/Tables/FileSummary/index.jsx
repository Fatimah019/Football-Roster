import React, { useContext } from "react";
import { TeamDataContext } from "../../../context/data";
import AppTable from "../../CustomTable";

const data = [
    {
        name: "hello"
    }
]

const FileSummaryTable = () => {
    const loadedDataSummary = useContext(TeamDataContext)

    console.log(loadedDataSummary, "loadedDataSummary")
    console.log(loadedDataSummary?.loadedData?.length, "pppppp")

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
                accessor: "id",
                Cell: (data) => {
                    return loadedDataSummary?.loadedData?.length
                },
            },
            {
                Header: "Goalkeepers",
                accessor: "id2",
                Cell: (data) => {
                    return (
                        Number(data?.row?.id) +
                        (data?.initialState?.pageIndex - 1) * 20 +
                        1
                    );
                },
            },
            {
                Header: "Defenders",
                accessor: "id3",
                Cell: (data) => {
                    return (
                        Number(data?.row?.id) +
                        (data?.initialState?.pageIndex - 1) * 20 +
                        1
                    );
                },
            },
            {
                Header: "Midfielders",
                accessor: "id4",
                Cell: (data) => {
                    return (
                        Number(data?.row?.id) +
                        (data?.initialState?.pageIndex - 1) * 20 +
                        1
                    );
                },
            },
            {
                Header: "Forwards",
                accessor: "id5",
                Cell: (data) => {
                    return (
                        Number(data?.row?.id) +
                        (data?.initialState?.pageIndex - 1) * 20 +
                        1
                    );
                },
            },
        ]}
    />
}

export default FileSummaryTable