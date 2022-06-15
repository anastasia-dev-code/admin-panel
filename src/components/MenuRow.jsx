import React from 'react';
import MyButton from "./UI/MyButton/MyButton";

const MenuRow = (props) => {
    return (
        <div>
            <div>
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.display}
                </div>
            </div>
        </div>
    );
};

export default MenuRow;