import React from 'react';
import ScenesIcon from "../../icons/MenuIcon/ScenesIcon";
import RoomsIcon from "../../icons/MenuIcon/RoomsIcon";
import OverviewIcon from "../../icons/MenuIcon/OverviewIcon";
import SecurityIcon from "../../icons/MenuIcon/SecurityIcon";
import MenuItem from "./MenuItem/MenuItem";

const Footer = () => {

    const nav = [
        {
            "text": "Scenes",
            "icon": <ScenesIcon/>,
            "active": false
        },
        {
            "text": "Rooms",
            "icon": <RoomsIcon/>,
            "active": false
        },
        {
            "text": "Overview",
            "icon": <OverviewIcon/>,
            "active": true
        },
        {
            "text": "Security",
            "icon": <SecurityIcon/>,
            "active": false
        },
    ]

    return (
        <footer
            className="px-[2rem] bg-dark_light_bg py-[1.4rem] w-full drop-shadow-default">
            <nav className="flex flex-row justify-between w-full">
                {
                    nav.map((item, index) =>
                        <MenuItem text={item.text} icon={item.icon} active={item.active} key={item.text + index}/>
                    )
                }
            </nav>
        </footer>
    );
};

export default Footer;
