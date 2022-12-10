import React from 'react';
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import GasSensorIcon from "../../components/icons/GasSensorIcon/GasSensorIcon";
import OKSystemStatusIcon from "../../components/icons/SystemStatusIcon/OKSystemStatusIcon";
import Item from "./Item/Item";

const MainPage = () => {

    const listItems = [
        {
            name: "System status",
            unit: null,
            value: "OK",
            icon: <OKSystemStatusIcon/>
        },
        {
            name: "Gas sensor",
            unit: "%LED",
            value: "000",
            icon: <GasSensorIcon/>
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
