// import React, { useContext, useRef, useState, useEffect } from "react";
// import AppActionMenu from "../../ActionMenu";
// import AppMenuItem from "../../ActionMenu/MenuItem";
// import AppTable from "../../CustomTable";
// import { ReactComponent as EditIcon } from "../../../assets/icons/edit_icon.svg";
// import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete_icon.svg"
// import ConfirmationDialog from "../../Modals/ConfirmationDialog";
// import PlayerEditDialog from "../../Modals/PlayerEdit";
// import { TeamDataContext } from "../../../context/data";
// import styles from "./roaster_details.module.css"
// import { SearchContext } from "../../../context/search";

// const RoasterDetailsTable = () => {
//     const playerEditModalDialogRef = useRef()
//     const confirmationModalDialogRef = useRef()
//     const data = useContext(TeamDataContext)
//     const searchData = useContext(SearchContext)

//     const [playerData, setPLayerData] = useState({})

//     const [playerDataList, setPlayerDataList] = useState([])
//     const [searchedDataList, setSearchedDataList] = useState([])

//     const [playerIndex, setPlayerIndex] = useState(null)

//     useEffect(() => {
//         // setPlayerDataList(data?.teamData)
//         searchData.setSearchedData(data?.teamData)
//     }, [data?.teamData])


//     console.log(searchData, "searched data from comntect")

//     return <>
//         <PlayerEditDialog
//             playerEditModalRef={playerEditModalDialogRef}
//             data={playerData}
//             updatedData={searchData?.searchedData}
//             setUpdatedData={searchData.setSearchedData}
//             id={playerIndex}
//         />
//         <ConfirmationDialog
//             confirmationModalRef={confirmationModalDialogRef}
//         />
//         <AppTable
//             tableData={
//                 searchData?.searchedData &&
//                 searchData?.searchedData?.map(
//                     (data) => data
//                 )
//             }
//             columnsData={[
//                 {
//                     Header: "Player Name",
//                     accessor: "Player Name",
//                     Cell: (data) => {
//                         return <div className={styles.player_info_flag_section}>
//                             <img src={data?.row?.original["Flag Image"]} alt="team-flag" />
//                             <span>{data?.row?.original["Player Name"]}</span>
//                         </div>
//                     },
//                 },
//                 {
//                     Header: "Jersey Number",
//                     accessor: "Jersey Number",
//                     Cell: (data) => {
//                         return data?.row?.original["Jersey Number"]
//                     },
//                 },
//                 {
//                     Header: "Starter",
//                     accessor: "Starter",
//                     Cell: (data) => {
//                         return data?.row?.original["Starter"]
//                     },
//                 },
//                 {
//                     Header: "Position",
//                     accessor: "Position",
//                     Cell: (data) => {
//                         return data?.row?.original?.Position
//                     },
//                 },
//                 {
//                     Header: "Height",
//                     accessor: "Height",
//                     Cell: (data) => {
//                         return data?.row?.original?.Height
//                     },
//                 },
//                 {
//                     Header: "Weight",
//                     accessor: "Weight",
//                     Cell: (data) => {
//                         return data?.row?.original?.Weight
//                     },
//                 },
//                 {
//                     Header: "Nationality",
//                     accessor: "Nationality",
//                     Cell: (data) => {
//                         return data?.row?.original?.Nationality
//                     },
//                 },
//                 {
//                     Header: "Appearances",
//                     accessor: "Appearances",
//                     Cell: (data) => {
//                         return data?.row?.original?.Appearances

//                     },
//                 },
//                 {
//                     Header: "Minutes Played",
//                     accessor: "Minutes Played",
//                     Cell: (data) => {
//                         return data?.row?.original["Minutes Played"]
//                     },
//                 },
//                 {
//                     Header: "",
//                     accessor: "option",
//                     Cell: (data) => {
//                         return (
//                             <AppActionMenu>
//                                 <AppMenuItem
//                                     menu_item_text="Edit Player"
//                                     menu_item_icon={<EditIcon />}
//                                     onClick={() => {
//                                         playerEditModalDialogRef.current.displayModal()
//                                         setPLayerData(data?.row?.original)
//                                         setPlayerIndex(data.row.id)
//                                     }}
//                                 />
//                                 <AppMenuItem
//                                     menu_item_text="Delete Player"
//                                     menu_item_icon={<DeleteIcon />}
//                                     onClick={() => confirmationModalDialogRef.current.displayModal()}
//                                 />
//                             </AppActionMenu>
//                         );
//                     },
//                 }
//             ]}
//         /></>
// }

// export default RoasterDetailsTable


import React, { useContext, useRef, useState, useEffect } from "react";
import AppActionMenu from "../../ActionMenu";
import AppMenuItem from "../../ActionMenu/MenuItem";
import AppTable from "../../CustomTable";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit_icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete_icon.svg"
import ConfirmationDialog from "../../Modals/ConfirmationDialog";
import PlayerEditDialog from "../../Modals/PlayerEdit";
import { TeamDataContext } from "../../../context/data";
import styles from "./roaster_details.module.css"
import { SearchContext } from "../../../context/search";

const RoasterDetailsTable = () => {
    const playerEditModalDialogRef = useRef()
    const confirmationModalDialogRef = useRef()
    const data = useContext(TeamDataContext)
    const searchData = useContext(SearchContext)

    const [playerData, setPLayerData] = useState({})

    const [playerIndex, setPlayerIndex] = useState(null)

    useEffect(() => {
        searchData.setSearchedData(data?.teamData)
    }, [data?.teamData])

    return <>
        <PlayerEditDialog
            playerEditModalRef={playerEditModalDialogRef}
            data={playerData}
            updatedData={searchData?.searchedData}
            setUpdatedData={searchData.setSearchedData}
            id={playerIndex}
        />
        <ConfirmationDialog
            confirmationModalRef={confirmationModalDialogRef}
        />
        <AppTable
            tableData={
                searchData?.searchedData &&
                searchData?.searchedData?.map(
                    (data) => data
                )
            }
            columnsData={[
                {
                    Header: "Player Name",
                    accessor: "Player Name",
                    Cell: (data) => {
                        return <div className={styles.player_info_flag_section}>
                            <img src={data?.row?.original["Flag Image"]} alt="team-flag" />
                            <span>{data?.row?.original["Player Name"]}</span>
                        </div>
                    },
                },
                {
                    Header: "Jersey Number",
                    accessor: "Jersey Number",
                    Cell: (data) => {
                        return data?.row?.original["Jersey Number"]
                    },
                },
                {
                    Header: "Starter",
                    accessor: "Starter",
                    Cell: (data) => {
                        return data?.row?.original["Starter"]
                    },
                },
                {
                    Header: "Position",
                    accessor: "Position",
                    Cell: (data) => {
                        return data?.row?.original?.Position
                    },
                },
                {
                    Header: "Height",
                    accessor: "Height",
                    Cell: (data) => {
                        return data?.row?.original?.Height
                    },
                },
                {
                    Header: "Weight",
                    accessor: "Weight",
                    Cell: (data) => {
                        return data?.row?.original?.Weight
                    },
                },
                {
                    Header: "Nationality",
                    accessor: "Nationality",
                    Cell: (data) => {
                        return data?.row?.original?.Nationality
                    },
                },
                {
                    Header: "Appearances",
                    accessor: "Appearances",
                    Cell: (data) => {
                        return data?.row?.original?.Appearances

                    },
                },
                {
                    Header: "Minutes Played",
                    accessor: "Minutes Played",
                    Cell: (data) => {
                        return data?.row?.original["Minutes Played"]
                    },
                },
                {
                    Header: "",
                    accessor: "option",
                    Cell: (data) => {
                        return (
                            <AppActionMenu>
                                <AppMenuItem
                                    menu_item_text="Edit Player"
                                    menu_item_icon={<EditIcon />}
                                    onClick={() => {
                                        playerEditModalDialogRef.current.displayModal()
                                        setPLayerData(data?.row?.original)
                                        setPlayerIndex(data.row.id)
                                    }}
                                />
                                <AppMenuItem
                                    menu_item_text="Delete Player"
                                    menu_item_icon={<DeleteIcon />}
                                    onClick={() => confirmationModalDialogRef.current.displayModal()}
                                />
                            </AppActionMenu>
                        );
                    },
                }
            ]}
        /></>
}

export default RoasterDetailsTable