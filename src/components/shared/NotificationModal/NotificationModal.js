import React from 'react';
import CloseIcon from "../../icons/CloseIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import FramingBadSmokeSensorIcon from "../../icons/SmokeSensorIcon/FramingBadSmokeSensorIcon";
import NotificationPlan from "../../../assets/notificationPlan.png"
import {GAS_SENSOR_TYPE, SMOKE_SENSOR_TYPE, WATER_SENSOR_TYPE} from "../../../App";
import FramingBadGasSensorIcon from "../../icons/GasSensorIcon/FramingBadGasSensorIcon";
import FramingBadWaterSensorIcon from "../../icons/WaterSensorIcon/FramingBadWaterSensorIcon";

const NotificationModal = ({closeAction, message}) => {

    switch (message.type) {
        case GAS_SENSOR_TYPE: {
            message.text = "Gas leak detected!"
            message.icon = <FramingBadGasSensorIcon/>
            break
        }
        case SMOKE_SENSOR_TYPE: {
            message.text = "Smoke leak detected!"
            message.icon = <FramingBadSmokeSensorIcon/>
            break
        }
        case WATER_SENSOR_TYPE: {
            message.text = "Water leak detected!"
            message.icon = <FramingBadWaterSensorIcon/>
            break
        }
        default: {
            break
        }
    }

    message.place = "Kitchen"
    message.time = "9:48:43"

    message.listNotifications = [
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

    message.plan = NotificationPlan


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
                        {
                            message.icon
                        }
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-big text-red">{message.text}</p>
                        <p className="text-default text-dark_text">{message.place} | {message.time}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={message.plan} alt=""/>
                    </div>
                    <div
                        className="rounded-default bg-dark_light_bg drop-shadow-default w-full pl-[2.5rem] py-[1.4rem] pr-[1rem] mt-[2rem]">
                        {
                            message.listNotifications.map((item, index) =>
                                <div className="flex flex-row gap-[2rem]" key={item.time + index}>
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
                    <button className="bg-dark_text rounded-default px-[3.5rem] py-[0.5rem] mt-[1.5rem]">
                        Turn off the alarm
                    </button>
                    <button className="bg-dark_text rounded-default px-[3.5rem] py-[0.5rem] mt-[1.5rem]">
                        Сonfirm the alarm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
