import React from 'react';

const ChangeScreenButton = ({loginActiveFlag, setLoginView}) => {
    return (
        <div className="grid grid-cols-2 bg-dark_dark_special rounded-default p-[0.5rem] drop-shadow-default">
            <button
                className={`w-full text-white py-[1.2rem] rounded-default text-middle ${loginActiveFlag ? "bg-dark_light_special" : ""}`}
                onClick={() => setLoginView(true)}
            >
                Sign in
            </button>
            <button
                className={`w-full text-white py-[1.2rem] rounded-default text-middle ${loginActiveFlag ? "" : "bg-dark_light_special"}`}
                onClick={() => setLoginView(false)}
            >
                Sign up
            </button>
        </div>
    );
};

export default ChangeScreenButton;