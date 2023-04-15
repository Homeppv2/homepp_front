import React from 'react';

const Item = ({name, icon, room, onClickAction, id}) => {
    return (
        <button className="bg-dark_light_bg drop-shadow-default pl-[2.4rem] py-[1.6rem] rounded-default flex flex-col"
                onClick={() => onClickAction(id)}>
            <p className="text-white">
                {name}
            </p>
            <div className="flex flex-row mt-[1.5rem] items-center grow gap-[1.2rem]">
                {
                    icon
                }
            </div>
            <p className="text-dark_text text-default mt-[1.5rem]">{room}</p>
        </button>
    );
};

export default Item;
