import update from 'immutability-helper'
import {useCallback, useState} from 'react'
import { TableRow } from '../Table/TableRow.js'
import TableHead from "./TableHead";
export const TableContainer = () => {
       const [menuRow, setMenuRow] = useState([{
            nr: '',
            id: '',
            title: '',
            url: '',
            icon: '',
            display: '',
            position: '',
            action: ''
            }]
        )
        // const [isLoaded, setIsLoaded] = useState(false);
        // useEffect(() => {
        //     fetch("http://restapi.adequateshop.com/api/Metadata/GetEmployees")
        //         .then(res => res.json())
        //         .then(
        //             (result) => {
        //                 setIsLoaded(true);
        //                 setRows(result);
        //             },
        //             (error) => {
        //                 setIsLoaded(true);
        //                 setRows(error);
        //             }
        //         )
        // }, [])
        // const moveRow = useCallback((dragIndex, hoverIndex) => {
        //     setMenuRow((prevRows) =>
        //         update(prevRows, {
        //             $splice: [
        //                 [dragIndex, 1],
        //                 [hoverIndex, 0, prevRows[dragIndex]],
        //             ],
        //         }),
        //     )
        //
        // }, [])
        // const renderRow = useCallback((menuRow, index) => {
        //     return (
                // <TableRow
                //     key={menuRow.id}
                //     index={index + 1}
                //     nr={menuRow.nr}
                //     title={menuRow.title}
                //     display={menuRow.display}
                //     icon={menuRow.icon}
                //     position={menuRow.position}
                //     action={menuRow.action}
                //     moveRow={moveRow}
                // />
        //     )
        // }, [menuRow])
        return (
            <table>
                <TableHead/>
                {menuRow.map((menuRow, i) => <TableRow
                    id={menuRow.id}
                    title={menuRow.title}
                />)}
            </table>
        )
}
