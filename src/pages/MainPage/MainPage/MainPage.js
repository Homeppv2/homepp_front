import React, { useEffect, useState } from 'react';
import OKSystemStatusIcon from "../../../components/icons/SystemStatusIcon/OKSystemStatusIcon";
import BADSystemStatusIcon from "../../../components/icons/SystemStatusIcon/BADSystemStatusIcon";
import OKSmokeSensorIcon from "../../../components/icons/SmokeSensorIcon/OKSmokeSensorIcon";
import BADSmokeSensorIcon from "../../../components/icons/SmokeSensorIcon/BADSmokeSensorIcon";
import MainPageItemMobile from "../MainPageMobile/MainPageItemMobile/MainPageItemMobile";
import MainPageItemAirQuality from "./MainPageItemAirQuality/MainPageItemAirQuality";
import {
    MAX_GAS_SENSOR,
    MAX_SMOKE_SENSOR,
    MAX_WATER_SENSOR,
    GAS_SENSOR_TYPE,
    SMOKE_SENSOR_TYPE,
    WATER_SENSOR_TYPE,
    AIR_QUALITY_SENSOR_TYPE
} from "../../../App";

const MainPage = ({ connectionStatusWS, message }) => {
    const [listItems, setListItems] = useState([
        {
            name: "System status",
            value: connectionStatusWS ? "OK" : "BAD",
            icon: connectionStatusWS ? <OKSystemStatusIcon /> : <BADSystemStatusIcon />,
        },
        {
            name: "Gas sensor",
            value: "null",
            icon: <BADSmokeSensorIcon />
        },
        {
            name: "Smoke sensor",
            value: "null",
            icon: <BADSmokeSensorIcon />
        },
        {
            name: "Water sensor",
            value: "null",
            icon: <BADSmokeSensorIcon />
        }
    ]);

    const [airQualityItem, setAirQualityItem] = useState({
        type: "air_quality",
        message: [
            { unit: "°C", value: "null", type: "Temperature" },
            { unit: "", value: "null", type: "Pressure" },
            { unit: "%", value: "null", type: "Humidity" },
            { unit: "", value: "null", type: "VOC" },
            { unit: "", value: "null", type: "Gas1" },
            { unit: "", value: "null", type: "Gas2" },
            { unit: "", value: "null", type: "Gas3" },
            { unit: "", value: "null", type: "PM1" },
            { unit: "", value: "null", type: "PM25" },
            { unit: "", value: "null", type: "PM10" },
            { unit: "", value: "null", type: "Fire" },
            { unit: "", value: "null", type: "Smoke" }
        ]
    });

    useEffect(() => {
        try {
            const messageType = message.msgs[0].ContollersEnviromentMessangesData.type;
            switch (messageType) {
                case 18:
                    const controlerEnv = message.msgs[0].ContollersEnviromentMessangesData.controlerenviroment;
                    setAirQualityItem(prevItem => ({
                        ...prevItem,
                        message: [
                            { ...prevItem.message[0], value: controlerEnv.temperature },
                            { ...prevItem.message[1], value: controlerEnv.pressure },
                            { ...prevItem.message[2], value: controlerEnv.humidity },
                            { ...prevItem.message[3], value: controlerEnv.voc },
                            { ...prevItem.message[4], value: controlerEnv.gas1 },
                            { ...prevItem.message[5], value: controlerEnv.gas2 },
                            { ...prevItem.message[6], value: controlerEnv.gas3 },
                            { ...prevItem.message[7], value: controlerEnv.pm1 },
                            { ...prevItem.message[8], value: controlerEnv.pm25 },
                            { ...prevItem.message[9], value: controlerEnv.pm10 },
                            { ...prevItem.message[10], value: controlerEnv.fire },
                            { ...prevItem.message[11], value: controlerEnv.smoke }
                        ]
                    }));
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }, [message]);

    useEffect(() => {
        try {
            if (message.msgs && message.msgs[0] && message.msgs[0].ContollersEnviromentMessangesData) {
                const messageType = message.msgs[0].ContollersEnviromentMessangesData.type;
                switch (messageType) {
                    case GAS_SENSOR_TYPE:
                        setListItems(prevItems => prevItems.map((item, index) => {
                            if (index === 1) {
                                return {
                                    ...item,
                                    value: message.msgs[0].ContollersEnviromentMessangesData.controlermodule.gas,
                                    icon: message.msgs[0].ContollersEnviromentMessangesData.controlermodule.gas < MAX_GAS_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />
                                };
                            }
                            return item;
                        }));
                        break;
                    case SMOKE_SENSOR_TYPE:
                        setListItems(prevItems => prevItems.map((item, index) => {
                            if (index === 2) {
                                return {
                                    ...item,
                                    value: message.msgs[0].ContollersEnviromentMessangesData.controlerenviroment.smoke,
                                    icon: message.msgs[0].ContollersEnviromentMessangesData.controlerenviroment.smoke < MAX_SMOKE_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />
                                };
                            }
                            return item;
                        }));
                        break;
                    case WATER_SENSOR_TYPE:
                        setListItems(prevItems => prevItems.map((item, index) => {
                            if (index === 3) {
                                return {
                                    ...item,
                                    value: message.msgs[0].ContollersEnviromentMessangesData.controlerenviroment.water,
                                    icon: message.msgs[0].ContollersEnviromentMessangesData.controlerenviroment.water < MAX_WATER_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />
                                };
                            }
                            return item;
                        }));
                        break;
                    case 18: // Assuming 12 corresponds to AIR_QUALITY_SENSOR_TYPE
                        const controlerEnv = message.msgs[0].ContollersEnviromentMessangesData.controlerenviroment;
                        setAirQualityItem(prevItem => ({
                            ...prevItem,
                            message: [
                                { ...prevItem.message[0], value: controlerEnv.temperature },
                                { ...prevItem.message[1], value: controlerEnv.pressure },
                                { ...prevItem.message[2], value: controlerEnv.humidity },
                                { ...prevItem.message[3], value: controlerEnv.voc },
                                { ...prevItem.message[4], value: controlerEnv.gas1 },
                                { ...prevItem.message[5], value: controlerEnv.gas2 },
                                { ...prevItem.message[6], value: controlerEnv.gas3 },
                                { ...prevItem.message[7], value: controlerEnv.pm1 },
                                { ...prevItem.message[8], value: controlerEnv.pm25 },
                                { ...prevItem.message[9], value: controlerEnv.pm10 },
                                { ...prevItem.message[10], value: controlerEnv.fire },
                                { ...prevItem.message[11], value: controlerEnv.smoke }
                            ]
                        }));
                        break;
                    default:
                        break;
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }, [message]);

    useEffect(() => {
        try {
            let temp = [...listItems];
            temp[0] = {
                ...temp[0],
                value: connectionStatusWS ? "OK" : "BAD",
                icon: connectionStatusWS ? <OKSystemStatusIcon /> : <BADSystemStatusIcon />,
            };
            setListItems([...temp]);
        } catch (error) {
            console.error("Error:", error);
        }
    }, [connectionStatusWS]);

    return (
        <div className="flex flex-col h-full">
            <main className="grow overflow-auto px-[2rem] py-[2rem]">
                <div className="grid grid-cols-2 gap-[2rem]">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 gap-[2rem]">
                            {listItems.map((item, index) => (
                                <div className="" key={index}>
                                    <MainPageItemMobile
                                        value={item.value}
                                        unit={item.unit}
                                        icon={item.icon}
                                        name={item.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <MainPageItemAirQuality message={airQualityItem.message} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainPage;