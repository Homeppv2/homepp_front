import React from 'react';
import RainIconBig from "../../../icons/WeatherIcon/RainIconBig";
import SearchIcon from "../../../icons/SearchIcon";
import ConnectionIconBig from "../../../icons/ConnectionIcon/ConnectionIconBig";

const Header = () => {
    return (
        <header className="px-[6rem] flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[1rem] items-center">
                <div className="flex flex-col items-center bg-green py-[1rem] px-[1.5rem] rounded-default">
                    <p className="text-dark_text">U</p>
                </div>
                <div className="">
                    <p className="text-white">UserName</p>
                    <p className="text-dark_text text-middle">usermail@demo.com</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-[1rem]">
                <p className="text-gigant text-dark_text">15°C</p>
                <RainIconBig/>
            </div>
            <div className="">
                <div className="flex flex-col">
                    <div
                        className="bg-dark_main_bg shadow-default rounded-default flex flex-row items-center pl-[1.5rem]">
                        <button>
                            <SearchIcon/>
                        </button>
                        <input
                            className="text-dark_text bg-dark_main_bg outline-0 p-[1.5rem] rounded-default"
                            placeholder="Search..."/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <ConnectionIconBig/>
            </div>
        </header>
    );
};

export default Header;