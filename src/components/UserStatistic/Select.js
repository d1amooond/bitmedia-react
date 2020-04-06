import React from 'react';
import SelectItem from "./SelectItem";

const Select = ({onSelectChange}) => {

    const selectData = {
        min: 10,
        max: 50,
        arr: []
    }

    for (let i = selectData.min; i <= selectData.max; i++) {
        selectData.arr.push(i)
    }


    return (
        <div className="select">
            Items in Table
            <select onChange={(el) => onSelectChange(Number(el.target.value))}>
                {selectData.arr.map((el) => <SelectItem value={el} option={el}/>)}
            </select>
        </div>
    )

}
export default Select;