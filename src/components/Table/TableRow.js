import React, {useRef, useState} from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../itemTypes/ItemTypes'
import cl from './Table.module.css'
import MyButton from "../UI/MyButton/MyButton";


export const TableRow = ({
      index,
      id,
      title,
      url,
      icon,
      display,
      position,
      moveRow,
      onDeleteRow
}) => {
    const ref = useRef(null)
    // const deleteRow = (e) => {
    //     onDeleteRow(...this.props.delete)
    // }

    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.ROW,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveRow(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.ROW,
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    const [menuRow, unsetMenuRow] = useState({
        id: '',
        title: '',
        url: '',
        icon: '',
        display: '',
        position: ''
    });

    const deleteMenuRow = () => {
        onDeleteRow(menuRow, () => unsetMenuRow({
            id: ' ',
            title: ' ',
            url: ' ',
            icon: ' ',
            display: ' ',
            position: ' '
        }))
    }

    return (
            <tr className={cl.MyTableRow} key={id} ref={ref} style={{opacity}} data-handler-id={handlerId}>
                <td>{index + 1}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{url}</td>
                <td>{display}</td>
                <td>{icon}</td>
                <td>{position}</td>
                <td>
                    <MyButton>
                        Edit
                    </MyButton>
                    <MyButton onClick={deleteMenuRow}>
                        Удалить
                    </MyButton>
                </td>
            </tr>
    )
}
