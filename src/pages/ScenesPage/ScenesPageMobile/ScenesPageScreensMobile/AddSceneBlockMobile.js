import React, {useState} from 'react';
import Select from "../../../../components/ui/Select/Select";
import NightModeIconLight from "../../../../components/icons/NightModeIcon/NightModeIconLight";
import SceneCategoryTvIcon from "../../../../components/icons/SceneCategoryTVIcon/SceneCategoryTVIcon";
import SceneCategoryTVIcon from "../../../../components/icons/SceneCategoryTVIcon/SceneCategoryTVIcon";
import ScenePageScreensAddSceneBlockItemMobile from "./ScenePageScreensAddSceneBlockItemMobile/ScenePageScreensAddSceneBlockItemMobile";
import SceneCategoryIntercomIcon from "../../../../components/icons/SceneCategoryIntercomIcon/SceneCategoryIntercomIcon";
import SceneCategoryLightItem from "../../../../components/icons/SceneCategoryLightIcon/SceneCategoryLightItem";
import SceneCategorySoundIcon from "../../../../components/icons/SceneCategorySoundIcon/SceneCategorySoundIcon";
import SceneRoomBathroomIcon from "../../../../components/icons/SceneRoomBathroomIcon/SceneRoomBathroomIcon";

const AddSceneBlockMobile = ({closeAction, addSceneAction}) => {
    const [categoryID, setCategoryID] = useState()
    const [rooms, setRooms] = useState([])
    console.log(categoryID)
    console.log(rooms)

    const categoryList = [
        {
            id: 1,
            name: "TV",
            icon: categoryID === 1 ? <SceneCategoryTvIcon strokeColor="#08AC83"/> : <SceneCategoryTVIcon/>,
            active: categoryID === 1
        },
        {
            id: 2,
            name: "Intercom",
            icon: categoryID === 2 ? <SceneCategoryIntercomIcon strokeColor="#08AC83" fillColor="#08AC83"/> :
                <SceneCategoryIntercomIcon/>,
            active: categoryID === 2
        },
        {
            id: 3,
            name: "Light",
            icon: categoryID === 3 ? <SceneCategoryLightItem strokeColor="#08AC83"/> :
                <SceneCategoryLightItem/>,
            active: categoryID === 3
        },
        {
            id: 4,
            name: "Sound",
            icon: categoryID === 4 ? <SceneCategorySoundIcon strokeColor="#08AC83"/> :
                <SceneCategorySoundIcon/>,
            active: categoryID === 4
        },
    ]

    const roomList = [
        {
            id: 1,
            name: "Room",
            icon: rooms.includes(1) ? <SceneRoomBathroomIcon fillColor="#08AC83"/> : <SceneRoomBathroomIcon/>,
            active: rooms.includes(1)
        },
        {
            id: 2,
            name: "Room",
            icon: rooms.includes(2) ? <SceneRoomBathroomIcon fillColor="#08AC83"/> : <SceneRoomBathroomIcon/>,
            active: rooms.includes(2)
        },
        {
            id: 3,
            name: "Room",
            icon: rooms.includes(3) ? <SceneRoomBathroomIcon fillColor="#08AC83"/> : <SceneRoomBathroomIcon/>,
            active: rooms.includes(3)
        },
        {
            id: 4,
            name: "Room",
            icon: rooms.includes(4) ? <SceneRoomBathroomIcon fillColor="#08AC83"/> : <SceneRoomBathroomIcon/>,
            active: rooms.includes(4)
        },
    ]

    const actions = [
        {
            title: "Turn on",
            value: 1
        }
    ]

    const devices = [
        {
            title: "lamp 1",
            value: 1
        }
    ]

    const conditions = [
        {
            title: "Entered",
            value: 1
        }
    ]

    const times = [
        {
            title: "Immediately",
            value: 1
        }
    ]


    const addRooms = (id) => {
        let temp = [...rooms]
        if (!rooms.includes(id)) {
            temp.push(id)
        } else {
            temp = []
            for (let i = 0; i < rooms.length; i++) {
                if (rooms[i] !== id) {
                    temp.push(rooms[i])
                }
                console.log(id)
            }
        }
        setRooms(temp)
    }

    return (
        <>
            <div className="z-10 absolute w-full h-full bg-black opacity-50"/>
            <div className="z-20 absolute w-full h-full grid items-end pb-[9.5rem] px-[2rem]">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row justify-between w-full items-center mb-[1rem] ">
                        <p className="self-start text-middle text-white bg-dark_light_bg rounded-default px-[2rem] py-[1rem]">New
                            Scene</p>
                        <button
                            onClick={closeAction}
                            className="bg-dark_light_bg text-dark_text rounded-[2.5rem] text-default px-[2rem] py-[0.5rem]">Close
                        </button>
                    </div>
                    <div
                        className="overflow-auto flex flex-col bg-dark_light_bg rounded-default w-full py-[1.5rem] px-[2rem]  max-h-[42rem]">

                        <div className="flex flex-row">
                            <div className="bg-green rounded-default p-[1rem]">
                                <NightModeIconLight/>
                            </div>
                            <input
                                className="text-default italic text-dark_text bg-dark_light_bg border-b border-dark_text w-full ml-[1rem]"
                                placeholder="Name..."/>
                        </div>

                        <div className="">
                            <p className="text-middle text-dark_text mt-[1rem] mb-[1rem]">Category</p>
                            <div className="flex flex-row gap-[1rem]">
                                {
                                    categoryList.map((item) =>
                                        <ScenePageScreensAddSceneBlockItemMobile icon={item.icon} name={item.name} id={item.id}
                                                                                 active={item.active}
                                                                                 actionOnClick={(id) => setCategoryID(id)}/>
                                    )
                                }
                            </div>
                        </div>

                        <div className="">
                            <p className="text-middle text-dark_text mt-[1rem] mb-[1rem]">Rooms</p>
                            <div className="flex flex-row gap-[1rem]">
                                {
                                    roomList.map((item) =>
                                        <ScenePageScreensAddSceneBlockItemMobile icon={item.icon} name={item.name} id={item.id}
                                                                                 active={item.active}
                                                                                 actionOnClick={(id) => addRooms(id)}/>
                                    )
                                }
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-middle text-dark_text mt-[1rem] mb-[1rem] w-full">Functions</p>
                            <div className="flex flex-col gap-[1rem] w-full">

                                <div className="flex flex-row gap-[1rem] items-center">
                                    <p className="text-middle text-dark_text">Action</p>
                                    <Select listItem={actions} borderRadius={"[2.5rem]"} value={1}/>
                                </div>

                                <div className="flex flex-row gap-[1rem] items-center">
                                    <p className="text-middle text-dark_text">Device</p>
                                    <Select listItem={devices} borderRadius={"[2.5rem]"} value={1}/>
                                </div>

                                <div className="flex flex-row gap-[1rem] items-center">
                                    <p className="text-middle text-dark_text">Condition</p>
                                    <Select listItem={conditions} borderRadius={"[2.5rem]"} value={1}/>
                                </div>

                                <div className="flex flex-row gap-[1rem] items-center">
                                    <p className="text-middle text-dark_text">Time</p>
                                    <Select listItem={times} borderRadius={"[2.5rem]"} value={1}/>
                                </div>

                            </div>
                            <button
                                onClick={addSceneAction}
                                className="bg-green text-light_text rounded-[2.5rem] text-middle px-[2rem] py-[0.5rem] mt-[1rem]">
                                Add Scene
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddSceneBlockMobile;