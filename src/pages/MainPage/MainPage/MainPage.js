import React, {useEffect, useState} from 'react';
import OKSystemStatusIcon from "../../../components/icons/SystemStatusIcon/OKSystemStatusIcon";
import BADSystemStatusIcon from "../../../components/icons/SystemStatusIcon/BADSystemStatusIcon";
import {
    GAS_SENSOR_TYPE,
    MAX_GAS_SENSOR,
    MAX_SMOKE_SENSOR,
    MAX_WATER_SENSOR,
    SMOKE_SENSOR_TYPE,
    WATER_SENSOR_TYPE
} from "../../../App";
import OKSmokeSensorIcon from "../../../components/icons/SmokeSensorIcon/OKSmokeSensorIcon";
import BADSmokeSensorIcon from "../../../components/icons/SmokeSensorIcon/BADSmokeSensorIcon";
import HeaderMobile from "../../../components/ui/Header/HeaderMobile/HeaderMobile";
import MainPageItemMobile from "../MainPageMobile/MainPageItemMobile/MainPageItemMobile";
import FooterMobile from "../../../components/ui/Footer/FooterMobile/FooterMobile";

const MainPage = ({connectionStatusWS, message}) => {

    const [listItems, setListItems] = useState([
        {
            name: "System status",
            unit: null,
            value: connectionStatusWS ? "OK" : "BAD",
            icon: connectionStatusWS ? <OKSystemStatusIcon/> : <BADSystemStatusIcon/>,
        },
        {
            name: "Gas sensor",
            unit: "%LED",
            value: message.type === GAS_SENSOR_TYPE ? message.message : "null",
            icon: message.type === GAS_SENSOR_TYPE && message.message < MAX_GAS_SENSOR ? <OKSmokeSensorIcon/> :
                <BADSmokeSensorIcon/>,
        },
        {
            name: "Smoke sensor",
            unit: "%LED",
            value: message.type === SMOKE_SENSOR_TYPE ? message.message : "null",
            icon: message.type === SMOKE_SENSOR_TYPE && message.message < MAX_SMOKE_SENSOR ?
                <OKSmokeSensorIcon/> :
                <BADSmokeSensorIcon/>,
        },
        {
            name: "Water sensor",
            unit: "%LED",
            value: message.type === WATER_SENSOR_TYPE ? message.message : "null",
            icon: message.type === WATER_SENSOR_TYPE && message.message < MAX_WATER_SENSOR ?
                <OKSmokeSensorIcon/> :
                <BADSmokeSensorIcon/>,
        }
    ])

    useEffect(() => {
        switch (message.type) {
            case GAS_SENSOR_TYPE: {
                let temp = [...listItems]
                temp[1] = {
                    ...temp[1],
                    value: message.message,
                    icon: message.message < MAX_GAS_SENSOR ? <OKSmokeSensorIcon/> : <BADSmokeSensorIcon/>
                }
                setListItems([...temp])
                break
            }
            case SMOKE_SENSOR_TYPE: {
                let temp = [...listItems]
                temp[2] = {
                    ...temp[2],
                    value: message.message,
                    icon: message.message < MAX_SMOKE_SENSOR ? <OKSmokeSensorIcon/> : <BADSmokeSensorIcon/>
                }
                setListItems([...temp])
                break
            }
            case WATER_SENSOR_TYPE: {
                let temp = [...listItems]
                temp[3] = {
                    ...temp[3],
                    value: message.message,
                    icon: message.message < MAX_WATER_SENSOR ? <OKSmokeSensorIcon/> : <BADSmokeSensorIcon/>
                }
                setListItems([...temp])
                break
            }
            default: {
                break
            }
        }
    }, [message])

    useEffect(() => {
        let temp = [...listItems]
        temp[0] = {
            ...temp[0],
            value: connectionStatusWS ? "OK" : "BAD",
            icon: connectionStatusWS ? <OKSystemStatusIcon/> : <BADSystemStatusIcon/>,
        }
        setListItems([...temp])
    }, [connectionStatusWS])

    return (
        <div className="flex flex-col h-full">
            <main className="grow overflow-auto px-[2rem] py-[2rem]">
                <div className="grid grid-cols-2 gap-[2rem]">
                    {
                        listItems.map((item, index) =>
                            <MainPageItemMobile value={item.value} unit={item.unit} icon={item.icon} name={item.name}
                                                key={item + index}/>
                        )
                    }
                </div>
            </main>
        </div>
    );
};

export default MainPage;