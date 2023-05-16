import React, {useState} from 'react';
import TextInput from "../../../../components/ui/inputs/TextInput";
import Select from "../../../../components/ui/Select/Select";
import CloseIcon from "../../../../components/icons/CloseIcon";
import SettingsDotIcon from "../../../../components/icons/SettingsDotIcon";

const AddDeviceScreenMobile = ({closeAction, addDeviceAction}) => {

    const listRoom = [
        {
            title: "Kitchen",
            value: "kitchen"
        },
        {
            title: "Bathroom",
            value: "bathroom"
        },
        {
            title: "Bedroom",
            value: "bedroom"
        },
    ]

    const [hardwareKey, setHardwareKey] = useState("")
    const [location, setLocation] = useState(listRoom[0].value)

    const addDevice = () => {
        const room = listRoom.filter(room => room.value === location)
        addDeviceAction({
            hardwareKey: hardwareKey,
            location: {...room[0]}
        })
    }


    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <button className="">
                    <SettingsDotIcon/>
                </button>
                <button className="" onClick={closeAction}>
                    <CloseIcon/>
                </button>
            </div>
            <div className="bg-dark_light_bg py-[1.6rem] px-[2.4rem] rounded-default mt-[6rem]">
                <p className="text-white text-middle mb-[1rem]">Hardware key</p>
                <TextInput placeholder={"Please enter hardware key of device"}
                           onChangeAction={setHardwareKey} value={hardwareKey}/>
                <div className="flex items-center mt-[2rem]">
                    <p className="text-dark_text text-default mr-[1rem]">Location:</p>
                    <Select listItem={listRoom} value={location.value} onChangeAction={setLocation}/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-items-center w-full mt-[3rem]">
                <button className="rounded-[2.5rem] text-middle text-light_text bg-green px-[2.5rem] py-[0.8rem]"
                        onClick={addDevice}>
                    Add Device
                </button>
            </div>
        </>
    );
};

export default AddDeviceScreenMobile;