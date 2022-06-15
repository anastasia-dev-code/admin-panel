import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const MenuForm = ({ onAddRow }) => {
    const [menuRow, setMenuRow] = useState({
        id: '',
        title: '',
        url: '',
        icon: '',
        display: '',
        position: ''
    });

    const addMenuRow = (e) => {
        e.preventDefault();
        onAddRow(menuRow, () => setMenuRow({
            id: '',
            title: '',
            url: '',
            icon: '',
            display: '',
            position: ''
        }));
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
                    value={menuRow.icon}
                    onChange={e => setMenuRow({...menuRow, icon: e.target.value})}
                    type="text"
                    placeholder="icon"
                />
                <MyInput
                    value={menuRow.display}
                    onChange={e => setMenuRow({...menuRow, display: e.target.value})}
                    type='checkbox'
                    label="display"
                />
                <MyInput
                    value={menuRow.position}
                    onChange={e => setMenuRow({...menuRow, position: e.target.value})}
                    type="text"
                    placeholder="position"
                />
                <MyButton onClick={addMenuRow}>Add Menu</MyButton>
            </form>
        </div>
    );
};

export default MenuForm;