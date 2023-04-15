import React from 'react';
import DefaultScenesIcon from "../../icons/MenuIcon/ScenesIcon/DefaultScenesIcon";
import DefaultRoomsIcon from "../../icons/MenuIcon/RoomsIcon/DefaultRoomsIcon";
import ActiveOverviewIcon from "../../icons/MenuIcon/OverViewIcon/ActiveOverviewIcon";
import DefaultSecurityIcon from "../../icons/MenuIcon/SecurityIcon/DefaultSecurityIcon";
import MenuItem from "./MenuItem/MenuItem";
import DefaultOverviewIcon from "../../icons/MenuIcon/OverViewIcon/DefaultOverviewIcon";
import ActiveSecurityIcon from "../../icons/MenuIcon/SecurityIcon/ActiveSecurityIcon";
import ActiveScenesIcon from "../../icons/MenuIcon/ScenesIcon/ActiveScenesIcon";

const Footer = ({activeItem}) => {

    const nav = [
        {
            "text": "Scenes",
            "icon": activeItem === "scenes" ? <ActiveScenesIcon/> : <DefaultScenesIcon/>,
            "active": activeItem === "scenes",
            "route": ""
        },
        {
            "text": "Rooms",
            "icon": activeItem === "rooms" ? <ActiveOverviewIcon/> : <DefaultRoomsIcon/>,
            "active": activeItem === "rooms",
            "route": ""
        },
        {
            "text": "Overview",
            "icon": activeItem === "" ? <ActiveOverviewIcon/> : <DefaultOverviewIcon/>,
            "active": activeItem === "",
            "route": ""
        },
        {
            "text": "Settings",
            "icon": activeItem === "settings" ? <ActiveSecurityIcon/> : <DefaultSecurityIcon/>,
            "active": activeItem === "settings",
            "route": "settings"
        },
    ]

    return (
        <footer
            className="px-[2rem] bg-dark_light_bg py-[1.4rem] w-full drop-shadow-default">
            <nav className="flex flex-row justify-between w-full">
                {
                    nav.map((item, index) =>
                        <MenuItem text={item.text} icon={item.icon} active={item.active} key={item.text + index}
                                  route={item.route}/>
                    )
                }
            </nav>
        </footer>
    );
};

export default Footer;
