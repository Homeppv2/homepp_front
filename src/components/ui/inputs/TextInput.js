import React from 'react';

const TextInput = ({label, value, placeholder, onChangeAction}) => {
    return (
        <div className="flex flex-col mt-[1.5rem]">
            <label className="text-dark_text mb-[1rem]">{label}</label>
            <input
                className="text-default text-dark_text outline-0 bg-dark_main_bg shadow-default p-[1.5rem] rounded-default"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChangeAction(e.target.value)}/>
        </div>
    );
};

export default TextInput;