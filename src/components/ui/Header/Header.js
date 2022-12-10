import React from 'react';
import AvatarBlock from "./AvatarBlock";
import SearchIcon from "../../icons/SearchIcon";
import ConnectionIcon from "../../icons/ConnectionIcon";
import RainIcon from "../../icons/WeatherIcon/RainIcon";

const Header = () => {
    return (
        <header
            className="px-[2rem] bg-dark_light_bg py-[1.4rem] w-full flex flex-row justify-between items-center drop-shadow-default">
            <div className="flex flex-row items-center">
                <AvatarBlock text={"E"}/>
                <div className="ml-[2.5rem] mr-[1.8rem]">
                    <ConnectionIcon/>
                </div>
                <div className="flex flex-row items-center gap-[0.6rem]">
                    <p className="text-dark_text text-big">15°C</p>
                    <RainIcon/>
                </div>
            </div>
            <div className="">
                <button><SearchIcon/></button>
            </div>
        </header>
    );
};

export default Header;
