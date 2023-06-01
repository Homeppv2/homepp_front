import React, {useState} from 'react';
import ArrowIcon from "../../../../components/icons/ArrowIcon/ArrowIcon";

const MainPageItemAirQuality = ({message}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="bg-dark_light_bg drop-shadow-default px-[2.4rem] py-[1.6rem] rounded-default flex flex-col">
            <p className="text-white">
                Air Quality
            </p>
            <div className="grid grid-cols-4 mt-[1.5rem] gap-[2rem]">
                {
                    message.slice(0, isOpen ? message.length : 4).map((item, index) =>
                        <div className="py-[1rem] bg-dark_main_bg rounded-default">
                            <div className="flex flex-col items-center w-full py-[1rem]">
                                <p className="text-h2 text-green">
                                    {
                                        item.value + item.unit
                                    }
                                </p>
                            </div>
                            <p className="text-dark_text text-center">
                                {
                                    item.type
                                }
                            </p>
                        </div>
                    )
                }
            </div>
            <button className="flex flex-col items-center pt-[1rem]"
                    onClick={() => setIsOpen((prevState) => (!prevState))}>
                {
                    isOpen ? <ArrowIcon/> : <ArrowIcon/>
                }
            </button>
        </div>
    );
};

export default MainPageItemAirQuality;