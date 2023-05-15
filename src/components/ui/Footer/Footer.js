import React from 'react';
import DefaultScenesIcon from "../../icons/MenuIcon/ScenesIcon/DefaultScenesIcon";
import DefaultRoomsIcon from "../../icons/MenuIcon/RoomsIcon/DefaultRoomsIcon";
import ActiveOverviewIcon from "../../icons/MenuIcon/OverViewIcon/ActiveOverviewIcon";
import DefaultMoreIcon from "../../icons/MenuIcon/SecurityIcon/DefaultMoreIcon";
import MenuItem from "./MenuItem/MenuItem";
import DefaultOverviewIcon from "../../icons/MenuIcon/OverViewIcon/DefaultOverviewIcon";
import ActiveMoreIcon from "../../icons/MenuIcon/SecurityIcon/ActiveMoreIcon";
import ActiveScenesIcon from "../../icons/MenuIcon/ScenesIcon/ActiveScenesIcon";
import DefaultSystemIcon from "../../icons/MenuIcon/SystemIcon/DefaultSystemIcon";
import ActiveSystemIcon from "../../icons/MenuIcon/SystemIcon/ActiveSystemIcon";

const Footer = ({activeItem}) => {

    let moreItemText = "More"
    switch (activeItem) {
        case "settings": {
            moreItemText = "Settings"
            break
        }
        case "users": {
            moreItemText = "Users"
            break
        }
        case "security": {
            moreItemText = "Security"
            break
        }
    }

    const nav = [
        {
            "text": "Scenes",
            "icon": activeItem === "scenes" ? <ActiveScenesIcon/> : <DefaultScenesIcon/>,
            "active": activeItem === "scenes",
            "route": "scenes"
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
            "text": "System",
            "icon": activeItem === "system" ? <ActiveSystemIcon/> : <DefaultSystemIcon/>,
            "active": activeItem === "system",
            "route": ""
        },
        {
            "text": moreItemText,
            "icon": activeItem === "settings" || activeItem === "users" || activeItem === "security" ?
                <ActiveMoreIcon/> : <DefaultMoreIcon/>,
            "active": activeItem === "settings" || activeItem === "users" || activeItem === "security",
            "route": "settings"
        },
    ]

    return (
        <>
            <footer
                className="z-20 px-[2rem] bg-dark_light_bg py-[1.4rem] w-full drop-shadow-default">
                <nav className="flex flex-row justify-between w-full">
                    {
                        nav.map((item, index) =>
                            <MenuItem text={item.text} icon={item.icon} active={item.active} key={item.text + index}
                                      route={item.route}/>
                        )
                    }
                </nav>
            </footer>
        </>
    );
};

export default Footer;
