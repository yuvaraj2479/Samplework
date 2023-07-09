import React, { useState } from 'react'
import InputBox from '../fields/InputBox';
import RadioButton from '../fields/RadioButton';
import jsondata from '../Json/JsonData.json'

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



    const handleRadio = (e, index, id) => {
      
        console.log(e.target.checked);
     let arr=   formvalue.filter(v => {
            if (v._id == id) {
                    v.value= v.Allocation[index].type
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
                                data={v.Allocation}
                                name={v.name}
                                value={v.value}
                                // checked={}
                                onChange={(e, index) => handleRadio(e, index, v._id,)}
                            />
                        );
                    // break;
                    default:
                        break;
                }
            })}
        </div>
    )
}
