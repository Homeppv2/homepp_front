import React from 'react';
import {useNavigate} from "react-router-dom";

const MenuItem = ({activeItem, text, icon, route, onClickAction}) => {

    const navigate = useNavigate()
    const onClick = () => {
        navigate(`../${route}`)
        onClickAction("/" + route)
    }

    return (
        <a className={`${activeItem ? "bg-dark_main_bg" : ""} cursor-pointer py-[1.5rem] pl-[1.5rem] grid grid-cols-[4rem_auto] items-center rounded-default`}
           onClick={onClick}>
            {
                icon
            }
            <p className="text-dark_text">{text}</p>
        </a>
    );
};

export default MenuItem;