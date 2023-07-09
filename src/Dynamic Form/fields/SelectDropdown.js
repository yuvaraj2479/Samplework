import React from 'react'

export default function SelectDropdown(props) {
    return (
        <div>
            <label className="px-1 text-h1-text-color text-base ">{props.labelname} <span id="required">*</span></label>
            <select onChange={(e) => props.onChange(e.target.value)}
                onKeyDown={(e) => props.onKeyDown(e.target.value)}
                value={props.value}
                disabled={props.disabled}
            >
                <option style={{ display: 'none' }}>Select {props.labelname}</option>
                {props.options.map(option =>
                    <option key={option['id']} value={option['id']}>
                        {option['name']}
                    </option>)}
            </select>


        </div>
    )
}
