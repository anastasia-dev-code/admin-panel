import update from 'immutability-helper'
import {useCallback, useState} from 'react'
import TableRow from '../Table/TableRow.jsx'
import TableHead from "./TableHead";
import _uniqueId from 'lodash/uniqueId';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

 const TableContainer = ({ menuRows }) => {
        const [menuRow, setMenuRow] = useState([{menuRows}])
        const uniqueId = (prefix = 'id-') =>
            prefix + Math.random().toString(16).slice(-4)
        const removePost = (menuRow) => {
            setMenuRow(menuRow.filter(p => p.id !== menuRow.id))
        }
        const renderRow = useCallback((menuRow, index, i) => {
            return (
               <TableRow
                   remove={removePost}
                   key={uniqueId}
                   menuRow={menuRow}
                   id={uniqueId}
                   index={index}
                   title={menuRow.title}
                   url={menuRow.url}
                   display={menuRow.display}
                   icon={menuRow.icon}
                   position={menuRow.position}
                   action={menuRow.action}
               />
            )
        }, [])

        // onDragEnd = result => {
        //     //TO DO
        // }

        return (
            <DragDropContext /*onDragEnd={this.onDragEnd}*/>
                <table key={uniqueId}>
                    <TableHead key={uniqueId}/>
                        <Droppable droppableId={menuRow.id}>
                            {(provided) => (
                                <tbody key={uniqueId}
                                       innerRef={provided.innerRef}
                                       {...provided.droppableProps}
                                >
                                        {menuRows.map((i, index, menuRow) => renderRow(i, index, menuRow))}
                                    {provided.placeholder}
                                </tbody>
                            )}
                        </Droppable>
                </table>
            </DragDropContext>
        )
}

export default TableContainer