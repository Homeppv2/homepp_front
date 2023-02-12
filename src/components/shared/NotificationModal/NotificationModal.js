import React from 'react';
import CloseIcon from "../../icons/CloseIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import EllipseIcon from "../../icons/EllipseIcon";
import FramingBadGasSensorIcon from "../../icons/GasSensorIcon/FramingBadGasSenserIcon";

const NotificationBlock = ({closeAction}) => {

    const listNotifications = [
        {
            time: "9:48:53",
            description: "Alarm drill started via app"
        },
        {
            time: "9:48:53",
            description: "Gas leak detected in kitchen"
        },
        {
            time: "9:00:00",
            description: "Gas sensor turned on"
        }
    ]

    return (
        <div className="absolute inset-0 h-full w-full bg-dark_dark_bg px-[2rem] py-[1.4rem]">
            <div className="">
                <div className="flex flex-row justify-between">
                    <button className="" onClick={closeAction}>
                        <CloseIcon/>
                    </button>
                    <button className="">
                        <SettingsIcon/>
                    </button>
                </div>
                <div className="flex flex-col items-center mt-[2rem]">
                    <div className="flex flex-col items-center">
                        <EllipseIcon/>
                        <p className="text-h1 text-red mt-[-8.5rem]">006</p>
                        <div className="mt-[-1rem]">
                            <FramingBadGasSensorIcon/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-big text-red">Gas leak detected!</p>
                        <p className="text-default text-dark_text">Kitchen | 9:48:43</p>
                    </div>
                    <div
                        className="rounded-default bg-dark_light_bg drop-shadow-default w-full pl-[2.5rem] py-[1.4rem] mt-[3.2rem]">
                        {
                            listNotifications.map((item, index) =>
                                <div className="flex flex-row gap-[4rem]" key={item.time + index}>
                                    <p className="text-default text-dark_text">{item.time}</p>
                                    <p className="text-default text-dark_text">{item.description}</p>
                                </div>)
                        }
                    </div>
                    <button className="self-end mt-[0.5rem]">
                        <p className="text-default text-dark_text">
                            All history
                        </p>
                        <div className="h-[0.12rem] w-[2.2rem] bg-dark_text"/>
                    </button>
                    <button className="bg-dark_text rounded-default px-[3.5rem] py-[0.5rem] mt-[4rem]">Turn off the
                        alarm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationBlock;
