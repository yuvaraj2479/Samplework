import React from 'react'

export default function RadioButton(props) {
    return (
        <div>
            <label>
                {props.label} :
            </label>
            {
                props.option.map((v,i )=> {
                    return (
                        <>
                            <input
                                type={props.type}
                                value={props.value}
                                onChange={(e)=>props.onChange(e,i)}
                                placeholder={props.placeholder}
                                checked={props.checked}
                                name={props.name}
                            />
                            <label>{v.label} </label>
                        </>
                    )
                })
            }
        </div>
    )
}
