import React from 'react';

const Select = ({listItem, label, value, onChangeAction, bgFieldColor = "dark_main_bg", borderRadius = "default"}) => {
    return (
        <div className="flex flex-col">
            <label className={`text-dark_text ${label ? "mb-[1rem]" : ""}`}>{label}</label>
            <select
                className={`text-default text-dark_text outline-0 bg-${bgFieldColor} shadow-default p-[0.5rem] rounded-${borderRadius}`}
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