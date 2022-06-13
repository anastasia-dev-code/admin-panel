import update from 'immutability-helper'
import {useCallback, useEffect, useState} from 'react'
import { Table } from '../Table/Table'
export const TableContainer = () => {
    {   const [rows, setRows] = useState([{
                id: '',
                name: '',
                address: '',
                zipcode: ''}
            ]
        )
        const [isLoaded, setIsLoaded] = useState(false);
        useEffect(() => {
            fetch("http://restapi.adequateshop.com/api/Metadata/GetEmployees")
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setRows(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setRows(error);
                    }
                )
        }, [])
        const moveRow = useCallback((dragIndex, hoverIndex) => {
            setRows((prevRows) =>
                update(prevRows, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevRows[dragIndex]],
                    ],
                }),
            )
        }, [])
        const renderRow = useCallback((row, index) => {
            return (
                <Table
                    key={row.id}
                    index={index}
                    name={row.Name}
                    address={row.Address}
                    zipcode={row.ZipCode}
                    moveRow={moveRow}
                />
            )
        }, [])
        return (
            <>
                <table>
                    {rows.map((row, i) => renderRow(row, i))}
                </table>
            </>
        )
    }
}
