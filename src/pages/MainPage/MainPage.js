import React from 'react';
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import OKGasSensorIcon from "../../components/icons/GasSensorIcon/OKGasSensorIcon";
import OKSystemStatusIcon from "../../components/icons/SystemStatusIcon/OKSystemStatusIcon";
import Item from "./Item/Item";
import BADSystemStatusIcon from "../../components/icons/SystemStatusIcon/BADSystemStatusIcon";
import {MAX_GAS_SENSOR} from "../../App";
import BADGasSensorIcon from "../../components/icons/GasSensorIcon/BADGasSensorIcon";

const MainPage = (message) => {

    console.log(message)

    const listItems = [
        {
            name: "System status",
            unit: null,
            value: message.text ? "OK" : "BAD",
            icon: message.text ? <OKSystemStatusIcon/> : <BADSystemStatusIcon/>,
        },
        {
            name: "Gas sensor",
            unit: "%LED",
            value: message.text ? message.text : "null",
            icon: !message.text || message.text < MAX_GAS_SENSOR ? <OKGasSensorIcon/> : <BADGasSensorIcon/>,
        },
    ]

    return (
        <div className="flex flex-col h-full">
            <Header/>
            <main className="grow">
                <div className="grid grid-cols-2 px-[2rem] gap-[2rem] mt-[3.2rem]">
                    {
                        listItems.map((item, index) =>
                            <Item value={item.value} unit={item.unit} icon={item.icon} name={item.name}
                                  key={item + index}/>
                        )
                    }
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default MainPage;
