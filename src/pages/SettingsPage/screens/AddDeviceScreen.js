import React, {useState} from 'react';
import TextInput from "../../../components/ui/inputs/TextInput";
import Select from "../../../components/ui/Select/Select";

const AddDeviceScreen = ({closeAction, addDeviceAction}) => {

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
        console.log(location)
        console.log(room)
        addDeviceAction({
            hardwareKey: hardwareKey,
            location: {...room[0]}
        })
    }


    return (
        <>
            <h2 className="text-white">Adding new device</h2>
            <TextInput placeholder={"Please enter hardware key of device"} label={"Hardware key"}
                       onChangeAction={setHardwareKey} value={hardwareKey}/>
            <Select listItem={listRoom} label={"Location"} value={location.value} onChangeAction={setLocation}/>
            <div className="flex flex-col items-center justify-items-center w-full mt-[4rem]">
                <button className="rounded-default text-light_text bg-dark_text px-[2.5rem] py-[1rem]"
                        onClick={addDevice}>
                    Add
                </button>
                <button className="text-dark_text mt-[2rem]" onClick={closeAction}>Close</button>
            </div>
        </>
    );
};

export default AddDeviceScreen;