import React from 'react'
import classes from './Input.module.css'

export default function Input(props) {
    return (
        <div
            className={`${classes.control} ${
                props.value.length > 0 && props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}
