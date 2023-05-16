import React from 'react';

const ScenesPageItemMobile = ({name, icon, rooms, numberActions, onClickAction, id}) => {
    return (
        <button className="bg-dark_light_bg drop-shadow-default pl-[2.4rem] py-[1.6rem] rounded-default flex flex-col"
                onClick={() => onClickAction(id)}>
            <p className="text-white text-middle">
                {name}
            </p>
            <div className="flex flex-row mt-[0.5rem] items-center">
                {
                    icon
                }
                <div className="ml-[1.5rem] flex flex-col justify-start items-start">
                    <p className="text-dark_text text-default">{rooms}</p>
                    <p className="text-dark_text text-default">{numberActions + " actions"}</p>
                </div>
            </div>
        </button>
    );
};

export default ScenesPageItemMobile;
