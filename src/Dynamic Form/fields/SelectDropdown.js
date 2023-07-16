import React from 'react'

export default function SelectDropdown(props) {
    return (
        <div>
            <label className="px-1 text-h1-text-color text-base ">{props.label} : </label>
            <select onChange={(e) => props.onChange(e)}
                // onKeyDown={(e) => props.onKeyDown(e.target.value)}
                value={props.value}
                // disabled={props.disabled}
                name={props.name}
            >
                <option style={{ display: 'none' }}>Select {props.label}</option>
                {props.options.map(option =>
                    <option key={option['id']} value={option['name']}>
                        {option['name']}
                    </option>)}
            </select>


        </div>
    )
}
