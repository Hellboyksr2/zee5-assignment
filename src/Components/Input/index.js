import React from 'react'

import styles from './input.module.css'

const Input = ({ type = "text", value, onChange, ...props }) => {
    return (
        <input className={styles.input} type={type} value={value} onChange={onChange} {...props} />
    )
}

export default Input;