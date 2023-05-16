import React, {useState} from 'react';
import DefaultScenesIcon from "../../icons/MenuIcon/ScenesIcon/DefaultScenesIcon";
import DefaultOverviewIcon from "../../icons/MenuIcon/OverViewIcon/DefaultOverviewIcon";
import DefaultRoomsIcon from "../../icons/MenuIcon/RoomsIcon/DefaultRoomsIcon";
import DefaultSystemIcon from "../../icons/MenuIcon/SystemIcon/DefaultSystemIcon";
import UsersIcon from "../../icons/MenuIcon/UsersIcon/UsersIcon";
import SecurityIcon from "../../icons/MenuIcon/SecurityIcon/SecurityIcon";
import SettingsIcon from "../../icons/MenuIcon/SettingsIcon/SettingsIcon";
import MenuItem from "./MenuItem/MenuItem";
import {useLocation} from "react-router-dom";
import NightModeIconLight from "../../icons/NightModeIcon/NightModeIconLight";
import LogoutIcon from "../../icons/MenuIcon/LogoutIcon/LogoutIcon";

const Menu = ({actionLogOut}) => {

    const [activeItem, setActiveItem] = useState(useLocation().pathname)

    const nav = [
        {
            "text": "Overview",
            "icon": <DefaultOverviewIcon/>,
            "active": activeItem === "/",
            "route": ""
        },
        {
            "text": "Rooms",
            "icon": <DefaultRoomsIcon/>,
            "active": activeItem === "/rooms",
            "route": "rooms"
        },
        {
            "text": "Scenes",
            "icon": <DefaultScenesIcon/>,
            "active": activeItem === "/scenes",
            "route": "scenes"
        },
        {
            "text": "System status",
            "icon": <DefaultSystemIcon/>,
            "active": activeItem === "/system-status",
            "route": "system-status"
        },
        {
            "text": "Users",
            "icon": <UsersIcon/>,
            "active": activeItem === "/users",
            "route": "users"
        },
        {
            "text": "Security",
            "icon": <SecurityIcon/>,
            "active": activeItem === "/security",
            "route": "security"
        },
        {
            "text": "Settings",
            "icon": <SettingsIcon/>,
            "active": activeItem === "/settings",
            "route": "settings"
        },

    ]

    return (
        <header className="flex flex-col px-[2rem] py-[2rem] items-center justify-between row-start-1 row-end-3">
            <div className="w-full">
                <div className="flex flex-col items-center w-full">
                    <div className="bg-green w-[10rem] h-[10rem] rounded-[2.5rem]"/>
                </div>
                <div className="mt-[3rem]">
                    {
                        nav.map((item) =>
                            <MenuItem activeItem={item.active} icon={item.icon} route={item.route} text={item.text}
                                      onClickAction={(item) => setActiveItem(item)}/>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col items-start w-full">
                <button
                    className="cursor-pointer py-[1.5rem] pl-[1.5rem] grid grid-cols-[4rem_auto] items-center rounded-default"
                    onClick={actionLogOut}>
                    {
                        <LogoutIcon/>
                    }
                    <p className="text-dark_text">Logout</p>
                </button>
                <div
                    className="cursor-pointer py-[1.5rem] pl-[1.5rem] grid grid-cols-[4rem_auto] items-center rounded-default">
                    <SettingsIcon width={27}/>
                    <p className="text-dark_text">Light mode</p>
                </div>
            </div>
        </header>
    );
};

export default Menu;