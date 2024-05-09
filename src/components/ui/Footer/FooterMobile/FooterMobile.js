import DefaultScenesIcon from "../../../icons/MenuIcon/ScenesIcon/DefaultScenesIcon";
import DefaultRoomsIcon from "../../../icons/MenuIcon/RoomsIcon/DefaultRoomsIcon";
import ActiveOverviewIcon from "../../../icons/MenuIcon/OverViewIcon/ActiveOverviewIcon";
import DefaultMoreIcon from "../../../icons/MenuIcon/MoreIcon/DefaultMoreIcon";
import MenuItemMobile from "./MenuItemMobile/MenuItemMobile";
import DefaultOverviewIcon from "../../../icons/MenuIcon/OverViewIcon/DefaultOverviewIcon";
import ActiveMoreIcon from "../../../icons/MenuIcon/MoreIcon/ActiveMoreIcon";
import ActiveScenesIcon from "../../../icons/MenuIcon/ScenesIcon/ActiveScenesIcon";
import DefaultSystemIcon from "../../../icons/MenuIcon/SystemIcon/DefaultSystemIcon";
import ActiveSystemIcon from "../../../icons/MenuIcon/SystemIcon/ActiveSystemIcon";

const FooterMobile = ({ activeItem }) => {
    let moreItemText = "More";
    switch (activeItem) {
        case "settings":
            moreItemText = "Settings";
            break;
        case "users":
            moreItemText = "Users";
            break;
        case "security":
            moreItemText = "Security";
            break;
    }

    const isActive = (item) => activeItem === item;
    const getIcon = (activeIcon, defaultIcon) => isActive(activeIcon) ? activeIcon : defaultIcon;

    const nav = [
        {
            text: "Scenes",
            icon: getIcon(<ActiveScenesIcon/>, <DefaultScenesIcon/>),
            active: isActive("scenes"),
            route: "scenes"
        },
        {
            text: "Rooms",
            icon: getIcon(<ActiveOverviewIcon/>, <DefaultRoomsIcon/>),
            active: isActive("rooms"),
            route: ""
        },
        {
            text: "Overview",
            icon: getIcon(<ActiveOverviewIcon/>, <DefaultOverviewIcon/>),
            active: isActive(""),
            route: ""
        },
        {
            text: "System",
            icon: getIcon(<ActiveSystemIcon/>, <DefaultSystemIcon/>),
            active: isActive("system"),
            route: ""
        },
        {
            text: moreItemText,
            icon: getIcon(<ActiveMoreIcon/>, <DefaultMoreIcon/>),
            active: isActive("settings") || isActive("users") || isActive("security"),
            route: "settings"
        },
    ];

    return (
        <footer className="z-20 px-[2rem] bg-dark_light_bg py-[1.4rem] w-full drop-shadow-default">
            <nav className="flex flex-row justify-between w-full">
                {nav.map((item, index) => (
                    <MenuItemMobile
                        text={item.text}
                        icon={item.icon}
                        active={item.active}
                        key={`${item.text}-${index}`}
                        route={item.route}
                    />
                ))}
            </nav>
        </footer>
    );
};

export default FooterMobile;
