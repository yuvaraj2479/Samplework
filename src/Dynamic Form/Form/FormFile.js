import React, { useState } from 'react'
import InputBox from '../fields/InputBox';
import RadioButton from '../fields/RadioButton';
import jsondata from '../Json/JsonData.json'
import SelectDropdown from '../fields/SelectDropdown';
import Checkbox from '../fields/Checkbox';

export default function FormFile() {

    const [formvalue, setFormvalue] = useState(jsondata.fields);

    const handleonchange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        let arr = formvalue.map((v) => {
            if (v.name === name) {
                v.value = value;
            }
            return v;
        });
        setFormvalue(arr);
    };

    const handleRadio = (e, index, id,) => {
        let arr = formvalue.filter(v => {
            if (v._id == id) {
                v.value = v.option[index].type
            }
            return v
        })
        setFormvalue(arr)
    }

    const handledropdown = (e) => {
        const { name, value } = e.target;

        let arr = formvalue.filter(v => {
            if (v.name == name) {
                v.value = value
            }
            return v
        })
        setFormvalue(arr)
    }

    const handlecheckbox = (e, data, index, id) => {

        let arr = formvalue.filter(v => {
            if (v._id == id) {
                let val = []
                v.option[index].ischecked = e.target.checked
                v.option.map(check => {
                    if (check.ischecked == true) {
                       val.push(check)
                    }
                })
                v.value=val
            }
            return v
        })
        setFormvalue(arr)
    }

    console.log(formvalue);

    return (
        <div>
            {formvalue?.map((v) => {
                switch (v.field) {
                    case "textfield":
                        return (
                            <InputBox
                                key={v.name}
                                label={v.label}
                                type={v.type}
                                onChange={(e) => handleonchange(e)}
                                name={v.name}
                                value={v.value}
                            />
                        );
                    // break;
                    case "radiofield":
                        return (
                            <RadioButton
                                key={v.name}
                                label={v.label}
                                type={v.type}
                                option={v.Allocation}
                                name={v.name}
                                value={v.value}
                                onChange={(e, index) => handleRadio(e, index, v._id,)}
                            />
                        );
                    // break;
                    case "dropdownfield":
                        return (
                            <SelectDropdown
                                label={v.label}
                                options={v.option}
                                name={v.name}
                                value={v.value}
                                onChange={(e) => handledropdown(e, index)}
                            />
                        );
                    // break;
                    case "checkboxfield":
                        return (
                            <Checkbox
                                label={v.label}
                                option={v.option}
                                type={v.type}
                                value={v.value}
                                name={v.name}
                                onChange={(e, data, index) => handlecheckbox(e, data, index, v._id)}
                            />
                        )

                    default:
                        break;
                }
            })}
        </div>
    )
}
