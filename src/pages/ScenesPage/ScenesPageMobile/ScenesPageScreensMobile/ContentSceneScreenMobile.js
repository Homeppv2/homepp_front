import React from 'react';
import ScenesPageItemMobile from "../ScenesPageItemMobile/ScenesPageItemMobile";
import DefaultPlusIcon from "../../../../components/icons/PlusIcon/DefaultPlusIcon";
import Select from "../../../../components/ui/Select/Select";

const ContentSceneScreenMobile = ({listItems, scenesItems, flagScreen, addSceneAction, activeDetailSceneAction}) => {
    console.log(flagScreen)
    return (
        <>
            <div className="px-[2rem] py-[2rem]">
                <div className="flex flex-row justify-between">
                    <Select listItem={scenesItems} value={scenesItems[0]} bgFieldColor={"dark_light_bg"}
                            borderRadius={"[2.5rem]"}/>
                    <button
                        className="flex justify-center items-center bg-dark_light_bg py-[0.5rem] rounded-[2.5rem] w-[12rem] text-middle"
                        onClick={addSceneAction}>
                        <DefaultPlusIcon/>
                        {

                        }
                        <p className="ml-[1rem] text-dark_text text-default">Create scene</p>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-[2rem] mt-[2rem]">
                    {
                        listItems.map((item, index) =>
                            <ScenesPageItemMobile icon={item.icon} name={item.name} rooms={item.rooms} key={item + index}
                                                  numberActions={item.numberActions}
                                                  onClickAction={activeDetailSceneAction} id={index}/>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ContentSceneScreenMobile;