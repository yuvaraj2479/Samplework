import React from 'react'

export default function Checkbox(props) {
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
                                onChange={(e)=>props.onChange(e,v,i)}
                                checked={props.checked}
                                name={props.name}
                            />
                            <label>{v.name} </label>
                        </>
                    )
                })
            }
    </div>
  )
}
