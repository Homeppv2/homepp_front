import React from 'react';
import DeviceItem from "../Item/DeviceItem";
import DefaultPlusIcon from "../../../components/icons/PlusIcon/DefaultPlusIcon";

const ContentDeviceScreen = ({listItems, addDeviceAction, activeDetailDeviceAction}) => {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex justify-center bg-dark_light_bg py-[1rem] rounded-default w-[12rem] text-middle">
                    <h2 className="text-white">Devices</h2>
                </div>
                <button
                    className="flex justify-center items-center bg-dark_light_bg py-[1rem] rounded-default w-[12rem] text-middle"
                    onClick={addDeviceAction}>
                    <DefaultPlusIcon/>
                    <p className="ml-[1rem] text-dark_text">Create</p>
                </button>
            </div>
            <div className="grid grid-cols-2 gap-[2rem] mt-[2rem]">
                {
                    listItems.map((item, index) =>
                        <DeviceItem icon={item.icon} name={item.name} room={item.room} key={item + index} unit={item.unit}
                                    value={item.value}
                                    onClickAction={activeDetailDeviceAction} id={index}/>
                    )
                }
            </div>
        </>
    );
};

export default ContentDeviceScreen;