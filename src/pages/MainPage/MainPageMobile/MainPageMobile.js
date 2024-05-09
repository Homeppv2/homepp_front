import React, { useEffect, useState } from 'react';
import HeaderMobile from "../../../components/ui/Header/HeaderMobile/HeaderMobile";
import FooterMobile from "../../../components/ui/Footer/FooterMobile/FooterMobile";
import OKSmokeSensorIcon from "../../../components/icons/SmokeSensorIcon/OKSmokeSensorIcon";
import OKSystemStatusIcon from "../../../components/icons/SystemStatusIcon/OKSystemStatusIcon";
import MainPageItemMobile from "./MainPageItemMobile/MainPageItemMobile";
import BADSystemStatusIcon from "../../../components/icons/SystemStatusIcon/BADSystemStatusIcon";
import {
    AIR_QUALITY_SENSOR_TYPE,
    GAS_SENSOR_TYPE,
    MAX_GAS_SENSOR,
    MAX_SMOKE_SENSOR,
    MAX_WATER_SENSOR,
    SMOKE_SENSOR_TYPE,
    WATER_SENSOR_TYPE
} from "../../../App";
import BADSmokeSensorIcon from "../../../components/icons/SmokeSensorIcon/BADSmokeSensorIcon";
import MainPageItemAirQuality from "../MainPage/MainPageItemAirQuality/MainPageItemAirQuality";

const MainPageMobile = ({ message, actionLogOut, connectionStatusWS }) => {

    const [airQualityItem, setAirQualityItem] = useState({
        type: "air_quality",
        message: getAirQualityMessage(message),
    });

    const [listItems, setListItems] = useState(getInitialListItems(connectionStatusWS, message));

    useEffect(() => {
        setListItems(prevListItems => updateListItems(prevListItems, message));
    }, [message]);

    useEffect(() => {
        setListItems(prevListItems => updateConnectionStatus(prevListItems, connectionStatusWS));
    }, [connectionStatusWS]);

    return (
        <div className="flex flex-col h-full">
            <HeaderMobile actionLogOut={actionLogOut} />
            <main className="grow overflow-auto px-[2rem] py-[2rem]">
                <div className="grid grid-cols-2 gap-[2rem]">
                    {
                        listItems.map((item, index) =>
                            <MainPageItemMobile value={item.value} unit={item.unit} icon={item.icon} name={item.name} key={index} />
                        )
                    }
                </div>
                <div className="">
                    <div className="">
                        <MainPageItemAirQuality message={airQualityItem.message} />
                    </div>
                </div>
            </main>
            <FooterMobile activeItem={""} />
        </div>
    );
};

const getAirQualityMessage = (message) => {
    return [
        {
            unit: "°C",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.temp : "null",
            type: "Temperature"
        },
        {
            unit: "",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.pressure : "null",
            type: "Pressure"
        },
        {
            unit: "%",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.humidity : "null",
            type: "Humidity"
        },
        {
            unit: "",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.co2 : "null",
            type: "CO2"
        },
        {
            unit: "",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.VOC : "null",
            type: "VOC"
        },
        {
            unit: "",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.alho : "null",
            type: "Alho"
        },
        {
            unit: "",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.co : "null",
            type: "CO"
        },
        {
            unit: "",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.fire : "null",
            type: "Fire"
        },
        {
            unit: "",
            value: message.type === AIR_QUALITY_SENSOR_TYPE ? message.message.metan : "null",
            type: "Metan"
        },
    ];
};

const getInitialListItems = (connectionStatusWS, message) => {
    return [
        {
            name: "System status",
            unit: null,
            value: connectionStatusWS ? "OK" : "BAD",
            icon: connectionStatusWS ? <OKSystemStatusIcon /> : <BADSystemStatusIcon />,
        },
        {
            name: "Gas sensor",
            unit: "%LED",
            value: message.type === GAS_SENSOR_TYPE ? message.message : "null",
            icon: message.type === GAS_SENSOR_TYPE && message.message < MAX_GAS_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />,
        },
        {
            name: "Smoke sensor",
            unit: "%LED",
            value: message.type === SMOKE_SENSOR_TYPE ? message.message : "null",
            icon: message.type === SMOKE_SENSOR_TYPE && message.message < MAX_SMOKE_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />,
        },
        {
            name: "Water sensor",
            unit: "%LED",
            value: message.type === WATER_SENSOR_TYPE ? message.message : "null",
            icon: message.type === WATER_SENSOR_TYPE && message.message < MAX_WATER_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />,
        }
    ];
};

const updateListItems = (prevListItems, message) => {
    switch (message.type) {
        case GAS_SENSOR_TYPE: {
            let temp = [...prevListItems];
            temp[1] = {
                ...temp[1],
                value: message.message,
                icon: message.message < MAX_GAS_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />
            };
            return temp;
        }
        case SMOKE_SENSOR_TYPE: {
            let temp = [...prevListItems];
            temp[2] = {
                ...temp[2],
                value: message.message,
                icon: message.message < MAX_SMOKE_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />
            };
            return temp;
        }
        case WATER_SENSOR_TYPE: {
            let temp = [...prevListItems];
            temp[3] = {
                ...temp[3],
                value: message.message,
                icon: message.message < MAX_WATER_SENSOR ? <OKSmokeSensorIcon /> : <BADSmokeSensorIcon />
            };
            return temp;
        }
        default: {
            return prevListItems;
        }
    }
};

const updateConnectionStatus = (prevListItems, connectionStatusWS) => {
    let temp = [...prevListItems];
    temp[0] = {
        ...temp[0],
        value: connectionStatusWS ? "OK" : "BAD",
        icon: connectionStatusWS ? <OKSystemStatusIcon /> : <BADSystemStatusIcon />,
    };
    return temp;
};

export default MainPageMobile;
