import React from 'react';
import CloseIcon from "../../../../components/icons/CloseIcon";
import SettingsDotIcon from "../../../../components/icons/SettingsDotIcon";
import DetailPlan from "../../../../assets/detailPlan.png"
import FramingOkSmokeSensorIcon from "../../../../components/icons/SmokeSensorIcon/FramingOKSmokeSensorIcon";
import Select from "../../../../components/ui/Select/Select";

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
        floors: [
            {
                value: 1,
                title: "first",
            },
            {
                value: 2,
                title: "second",
            },
        ]
    }

    return (
        <div className="">
            <div className="">
                <div className="flex flex-row justify-between">
                    <button className="">
                        <SettingsDotIcon/>
                    </button>
                    <button className="" onClick={closeAction}>
                        <CloseIcon/>
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
                        <p className="text-middle text-dark_text">{device.place}</p>
                    </div>
                    <div
                        className="rounded-default bg-dark_light_bg drop-shadow-default w-full pl-[2.5rem] py-[1.4rem] pr-[1rem] my-[1rem]">
                        <p className="text-middle text-white mb-[1rem]">Device info:</p>
                        <p className="text-middle text-dark_text">{device.info}</p>
                    </div>
                    <div className="pl-[2.5rem] self-start flex flex-row items-center my-[1rem]">
                        <p className="text-dark_text pr-[1rem]">Floor:</p>
                        <Select listItem={device.floors} bgFieldColor={"dark_light_bg"}/>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={device.plan} alt=""/>
                    </div>
                    <div
                        className=" flex flex-col rounded-default bg-dark_light_bg drop-shadow-default w-full pl-[2.5rem] py-[1.4rem] pr-[1rem] mt-[2rem]">
                        {
                            device.listNotifications.map((item, index) =>
                                <div className="flex flex-row gap-[2rem] mb-[1rem]" key={item.time + index}>
                                    <p className="text-default text-dark_text">{item.time}</p>
                                    <p className="text-default text-dark_text">{item.description}</p>
                                </div>)
                        }
                        <div className="h-[0.12rem] w-full bg-dark_text mb-[1rem]"/>
                        <button className="self-end mt-[0.5rem] self-end">
                            <p className="text-default text-dark_text">
                                All history
                            </p>
                            <div className="h-[0.12rem] w-[2.2rem] bg-dark_text"/>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-items-center w-full mt-[3rem]">
                        <button
                            className="rounded-[2.5rem] text-middle text-light_text bg-dark_text px-[2.5rem] py-[0.8rem]">
                            Delete Device
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddDeviceScreen;