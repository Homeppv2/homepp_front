import React from 'react';

const MenuItem = ({icon, text, active}) => {
    return (
        <button className="flex flex-col justify-center items-center gap-[1rem]">
            {
                icon
            }
            <p className={`text-small ${active ? "text-green" : "text-dark_text"}`}>{text}</p>
        </button>
    );
};

export default MenuItem;
