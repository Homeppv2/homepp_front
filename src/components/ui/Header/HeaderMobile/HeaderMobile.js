import React from 'react';
import AvatarBlockMobile from "./AvatarBlockMobile";
import SearchIcon from "../../../icons/SearchIcon";
import ConnectionIconSmall from "../../../icons/ConnectionIcon/ConnectionIconSmall";
import RainIconSmall from "../../../icons/WeatherIcon/RainIconSmall";

const HeaderMobile = ({actionLogOut}) => {
    return (
        <header
            className="px-[2rem] bg-dark_light_bg py-[1.4rem] w-full flex flex-row justify-between items-center drop-shadow-default z-20">
            <div className="flex flex-row items-center">
                <AvatarBlockMobile actionOnClick={actionLogOut} text={"Exit"}/>
                <div className="ml-[2.5rem] mr-[1.8rem]">
                    <ConnectionIconSmall/>
                </div>
                <div className="flex flex-row items-center gap-[0.6rem]">
                    <p className="text-dark_text text-big">15°C</p>
                    <RainIconSmall/>
                </div>
            </div>
            <div className="">
                <button><SearchIcon/></button>
            </div>
        </header>
    );
};

export default HeaderMobile;
