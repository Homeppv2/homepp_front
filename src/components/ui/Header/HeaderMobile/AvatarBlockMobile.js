import React from 'react';

const AvatarBlockMobile = ({text, actionOnClick}) => {
    return (
        <button onClick={actionOnClick}
                className="w-[4rem] h-[4rem] flex justify-center items-center bg-green rounded-[0.8rem]">
            <p className="text-dark_text text-big font-bold">{text}</p>
        </button>
    );
};

export default AvatarBlockMobile;
