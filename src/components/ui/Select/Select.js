import React from 'react';

const Select = ({listItem, label, value, onChangeAction}) => {
    return (
        <div className="flex flex-col mt-[1.5rem]">
            <label className="text-dark_text mb-[1rem]">{label}</label>
            <select
                className="text-default text-dark_text outline-0 bg-dark_main_bg shadow-default p-[1.5rem] rounded-default"
                value={value}
                onChange={(e) => onChangeAction(e.target.value)}>
                {
                    listItem.map((item, index) =>
                        <option value={item.value} key={item + index}>{item.title}</option>
                    )
                }
            </select>
        </div>
    );
};

export default Select;