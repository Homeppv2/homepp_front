import React from 'react';
import CloseIcon from "../../../components/icons/CloseIcon";
import SettingsIcon from "../../../components/icons/SettingsIcon";
import DetailPlan from "../../../assets/detailPlan.png"
import FramingOkSmokeSensorIcon from "../../../components/icons/SmokeSensorIcon/FramingOKSmokeSensorIcon";

const AddDeviceScreen = ({closeAction, deviceID}) => {

    const device = {
        icon: <FramingOkSmokeSensorIcon/>,
        status: "OK",
        place: "Kitchen",
        info: "Smoke sensor V-NHF564",
        plan: DetailPlan,
        listNotifications: [
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
        ],

    }

    return (
        <div className="">
            <div className="">
                <div className="flex flex-row justify-between">
                    <button className="" onClick={closeAction}>
                        <CloseIcon/>
                    </button>
                    <button className="">
                        <SettingsIcon/>
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        {
                            device.icon
                        }
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-big text-green">{device.status}</p>
                        <p className="text-default text-dark_text">{device.place}</p>
                    </div>
                    <div
                        className="rounded-default bg-dark_light_bg drop-shadow-default w-full pl-[2.5rem] py-[1.4rem] pr-[1rem] my-[1rem]">
                        <p className="text-default text-white">Device info:</p>
                        <p className="text-default text-dark_text">{device.info}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={device.plan} alt=""/>
                    </div>
                    <div
                        className="rounded-default bg-dark_light_bg drop-shadow-default w-full pl-[2.5rem] py-[1.4rem] pr-[1rem] mt-[1rem]">
                        {
                            device.listNotifications.map((item, index) =>
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
                        Delete device
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AddDeviceScreen;