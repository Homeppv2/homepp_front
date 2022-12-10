import React from 'react';

const Item = ({name, value, unit, icon}) => {
    return (
        <button className="bg-dark_light_bg drop-shadow-default pl-[2.4rem] py-[1.6rem] rounded-default flex flex-col">
            <p className="text-dark_text">
                {name}
            </p>
            <div className="flex flex-row mt-[1.5rem] items-center grow gap-[1.2rem]">
                {
                    icon
                }
                <div className="flex flex-col">
                    {
                        unit && <p className="text-dark_text text-small">{unit}</p>
                    }
                    <p className="text-gigant text-dark_text">{value}</p>
                </div>
            </div>
        </button>
    );
};

export default Item;
