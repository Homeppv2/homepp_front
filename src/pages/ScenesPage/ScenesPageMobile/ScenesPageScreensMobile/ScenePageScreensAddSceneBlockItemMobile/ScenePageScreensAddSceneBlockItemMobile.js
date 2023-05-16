import React from 'react';

const ScenePageScreensAddSceneBlockItemMobile = ({icon, active, name, actionOnClick, id}) => {
    return (
        <button className="flex flex-col items-center justify-center" onClick={() => actionOnClick(id)}>
            {
                icon
            }
            <p className={`text-default text-${active ? "green" : "dark_text"} mt-[0.8rem]`}>{name}</p>
        </button>
    );
};

export default ScenePageScreensAddSceneBlockItemMobile;