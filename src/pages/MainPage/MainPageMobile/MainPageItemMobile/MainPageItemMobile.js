import React from 'react';

const MainPageItemMobile = ({ name, data }) => {
    const value = data?.value;
    const unit = data?.unit;
    const icon = data?.icon;

    return (
        <button className="bg-dark_light_bg drop-shadow-default pl-[2.4rem] py-[1.6rem] rounded-default flex flex-col w-full h-full">
            <p className="text-white">
                {name}
            </p>
            <div className="flex flex-row mt-[1.5rem] items-center gap-[1.2rem]">
                {icon}
                <div className="flex flex-col flex-grow">
                    {unit && <p className="text-dark_text text-small">{unit}</p>}
                    <p className="text-gigant text-dark_text">{value}</p>
                </div>
            </div>
        </button>
    );
};

export default MainPageItemMobile;
