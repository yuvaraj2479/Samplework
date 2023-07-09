import React from 'react'

export default function InputBox(props) {
    return (
        <div>
            <label>{props.label} :</label>
            <input
                type={props.type}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                placeholder={props.label}
            />

        </div>
    )
}
