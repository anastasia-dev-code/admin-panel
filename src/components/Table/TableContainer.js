import update from 'immutability-helper'
import {useCallback, useState} from 'react'
import { TableRow } from '../Table/TableRow.js'
import TableHead from "./TableHead";
export const TableContainer = ({ menuRows }) => {
       const [menuRow, setMenuRow] = useState([{menuRows}])
       //      nr: '',
       //      id: '',
       //      title: '',
       //      url: '',
       //      icon: '',
       //      display: '',
       //      position: '',
       //      action: ''
       //      }]
       //  )
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
        //}, [])
        const moveRow = useCallback((dragIndex, hoverIndex) => {
            setMenuRow((prevRows) =>
                update(prevRows, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, prevRows[dragIndex]],
                    ],
                }),
            )

        }, [])
        const renderRow = useCallback((menuRow, index, i) => {
            return (
               <tbody key={Math.floor(Math.random() * (1000000 - 1)) + 1}>
                   <TableRow
                       key={Math.floor(Math.random() * (1000000 - 1)) + 1}
                       id={menuRow.id}
                       index={index}
                       title={menuRow.title}
                       url={menuRow.url}
                       display={menuRow.display}
                       icon={menuRow.icon}
                       position={menuRow.position}
                       action={menuRow.action}
                       moveRow={moveRow}
                   />
               </tbody>
            )
        }, [moveRow])
        return (
            <table key={Math.floor(Math.random() * (1000000 - 1)) + 1}>
                <TableHead key={Math.floor(Math.random() * (1000000 - 1)) + 1}/>
                {menuRows.map((i, index, menuRow) => renderRow(i, index, menuRow))}
            </table>
        )
}