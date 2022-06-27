import React, {useRef, useState} from 'react'
import {Router, useHistory, useNavigate} from 'react-router-dom'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../itemTypes/ItemTypes'
import cl from './Table.module.css'
import MyButton from "../UI/MyButton/MyButton";
import {Draggable, Droppable} from "react-beautiful-dnd";



const TableRow = (props, {index = 1}) => {
    const key = Math.floor(Math.random() * (100)) + 1
    const router = useNavigate()

    return (
        <tr
            className={cl.MyTableRow}
            key={key}
        >
            <td>{index}</td>
            <td>{props.menuRow.id = key}</td>
            <td>{props.menuRow.title}</td>
            <td>{props.menuRow.url}</td>
            <td>{props.menuRow.display}</td>
            <td>{props.menuRow.icon}</td>
            <td>{props.menuRow.position}</td>
            <td>
                <MyButton onClick={() => router.push(`/posts/${props.menuRow.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.menuRow)}>
                    Удалить
                </MyButton>
            </td>
        </tr>
    )
}

export default TableRow
