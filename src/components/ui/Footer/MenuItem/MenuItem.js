import React from 'react';
import {useNavigate} from "react-router-dom";

const MenuItem = ({icon, text, active, route}) => {

    const navigate = useNavigate()
    const onClick = () => {
        navigate(`../${route}`)
    }

    return (
        <button onClick={onClick} className="flex flex-col justify-center items-center gap-[1rem]">
            {
                icon
            }
            <p className={`text-small ${active ? "text-green" : "text-dark_text"}`}>{text}</p>
        </button>
    );
};

export default MenuItem;
