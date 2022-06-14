import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const MenuForm = ({create}) => {
    const [menuRow, setMenuRow] = useState({
        nr: '',
        id: '',
        title: '',
        url: '',
        icon: '',
        display: '',
        position: '',
        action: ''
    })

    const addMenuRow = (e) => {
        e.preventDefault()
        const newMenuRow = {
            ...menuRow, id: Date.now()
        }
        create(newMenuRow)
        setMenuRow({
            nr: '',
            id: '',
            title: '',
            url: '',
            icon: '',
            display: '',
            position: '',
            action: ''
        })
    }


    return (
        <div>
            <form>
                <MyInput
                    value={menuRow.title}
                    onChange={e => setMenuRow({...menuRow, title: e.target.value})}
                    type="text"
                    placeholder="название поста"
                />
                <MyInput
                    value={menuRow.url}
                    onChange={e => setMenuRow({...menuRow, url: e.target.value})}
                    type="text"
                    placeholder="линк поста"
                />
                <MyInput
                    value={menuRow.display}
                    onChange={e => setMenuRow({...menuRow, display: e.target.value})}
                    type="text"
                    placeholder="display"
                />
                <MyButton onClick={addMenuRow}>Add Menu</MyButton>
            </form>
        </div>
    );
};

export default MenuForm;