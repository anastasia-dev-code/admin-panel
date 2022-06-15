import React from 'react';
import cl from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
    const label = props.label;
    const input = <input ref={ref} className={cl.MyInput} {...props}/>;
    return label ? <label className={cl.MyInputLabel}>{ input } {label}</label> : input;
})

export default MyInput;