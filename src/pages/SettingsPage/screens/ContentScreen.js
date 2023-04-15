import React from 'react';
import Item from "../Item/Item";
import DefaultPlusIcon from "../../../components/icons/PlusIcon/DefaultPlusIcon";

const ContentScreen = ({listItems, addDeviceAction, activeDetailDeviceAction}) => {
    return (
        <>
            <h2 className="text-white">Devices</h2>
            <div className="grid grid-cols-2 gap-[2rem] mt-[2rem]">
                {
                    listItems.map((item, index) =>
                        <Item icon={item.icon} name={item.name} room={item.room} key={item + index}
                              onClickAction={activeDetailDeviceAction} id={index}/>
                    )
                }
                <button onClick={addDeviceAction}
                        className="bg-dark_light_bg drop-shadow-default pl-[2.4rem] py-[1.6rem] rounded-default flex flex-col">
                    <p className="text-dark_text"/>
                    <div className="flex flex-row mt-[1.5rem] items-center grow gap-[1.2rem]">
                        <div className=" bg-dark_main_bg rounded-round border-0 p-[1.6rem]">
                            <DefaultPlusIcon/>
                        </div>
                    </div>
                    <p className="text-dark_text text-default mt-[1.5rem]">Add new device</p>
                </button>
            </div>
        </>
    );
};

export default ContentScreen;