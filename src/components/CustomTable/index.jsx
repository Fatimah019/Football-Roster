import React, { useMemo, useRef } from "react";
import { useTable, usePagination } from "react-table";
import ImporterDialog from "../Modals/ImporterDialog";
import styles from "./table.module.css"

const AppTable = ({ columnsData,
    tableData,
    tablePageSize,
    tableTotalCount,
    currentPage,
}) => {
    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);
    const tableInstance = useTable(
        {
            columns,
            data: data ?? [],
            initialState: { pageIndex: currentPage, pageSize: tablePageSize },
            manualPagination: true,
            pageCount: Math?.ceil(tableTotalCount / tablePageSize),
        },
        usePagination
    );

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
        tableInstance;

    const importerModalRef = useRef()

    const openImporterModal = () => {
        importerModalRef.current.displayModal()
    }

    return <div className={styles.table_container}>
        <ImporterDialog importerModalRef={importerModalRef} />
        <table {...getTableProps} className={styles.table}>
            <thead className={styles.table_head}>
                {headerGroups?.map((headerGroup, index) => (
                    <tr {...headerGroup?.getHeaderGroupProps()} key={index}>
                        {headerGroup?.headers?.map((column, index) => (
                            <th {...column?.getHeaderProps()} key={index}>
                                {column?.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            {
                !data.length ? (
                    <tbody>
                        <tr className={styles.table_empty_content}>
                            <td colSpan="100%"><p>You do not have any players on the roster</p><span onClick={openImporterModal}>Import Team</span></td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody {...getTableBodyProps()} className={styles.table_body}>
                        {page?.map((row, index) => {
                            prepareRow(row);
                            return (
                                <tr {...row?.getRowProps()} key={index}>
                                    {row?.cells?.map((cell, index) => {
                                        return (
                                            <td {...cell?.getCellProps()} key={index}>
                                                {!cell?.render("Cell")
                                                    ? null
                                                    : cell?.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                )}
        </table>
    </div>

}

export default AppTable