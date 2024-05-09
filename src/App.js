import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import LoginPageMobile from "/root/homepp_front-master_weather+time/src/pages/LoginPage/LoginPageMobile/LoginPageMobile.js";
import NotificationModalMobile from "/root/homepp_front-master_weather+time/src/components/shared/NotificationModalMobile/NotificationModalMobile.js";
import MainPageMobile from "/root/homepp_front-master_weather+time/src/pages/MainPage/MainPageMobile/MainPageMobile.js";
import SettingsPageMobile from "/root/homepp_front-master_weather+time/src/pages/SettingsPage/SettingsPageMobile/SettingsPageMobile.js";
import ScenesPageMobile from "/root/homepp_front-master_weather+time/src/pages/ScenesPage/ScenesPageMobile/ScenesPageItemMobile/ScenesPageItemMobile.js";
import Menu from "/root/homepp_front-master_weather+time/src/components/ui/Menu/Menu.js";
import Header from "/root/homepp_front-master_weather+time/src/components/ui/Header/Header/Header.js";
import MainPage from "/root/homepp_front-master_weather+time/src/pages/MainPage/MainPage/MainPage.js";

export const URL_WS = `ws://95.163.229.198:8001/login`;
export const URL_HTTP = `http://95.163.229.198:8001`;

export const MAX_GAS_SENSOR = 100;
export const GAS_SENSOR_TYPE = 'gas';
export const MAX_SMOKE_SENSOR = 100;
export const SMOKE_SENSOR_TYPE = 'smoke';
export const MAX_WATER_SENSOR = 100;
export const WATER_SENSOR_TYPE = 'water';
export const AIR_QUALITY_SENSOR_TYPE = 'air_quality';

function App({ route }) {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const render = useRef(false);
    const [socket, setSocket] = useState(null);
    const [notificationIsPresent, setNotificationIsPresent] = useState(false);
    const [message, setMessage] = useState({});
    const [badMessage, setBadMessage] = useState({});
    const [connectionStatusWS, setConnectionStatusWS] = useState(false);
    const isAuth = localStorage.getItem("auth");

    useEffect(() => {
        const wsRun = new WebSocket(URL_WS);
        setSocket(wsRun);

        wsRun.onopen = function () {
            setConnectionStatusWS(true);
            console.log('WebSocket connected');
            wsRun.send(JSON.stringify({
                email: "admin@admin.com",
                password: "admin",
            }));
        };

        wsRun.onmessage = function (event) {
            console.log('Получены данные', event.data);
            console.log('Тип данных',typeof JSON.parse(event.data));
            const parsedData = JSON.parse(event.data);
            console.log('parsedData:', parsedData);
            setMessage(parsedData);
        };


        wsRun.onclose = function () {
            console.log('WebSocket disconnected');
            setConnectionStatusWS(false);
        };

        return () => {
            wsRun.close();
        };
    }, []);

    const handleSensorMessage = useCallback((receivedMessage) => {
        if (receivedMessage.message && receivedMessage.type) {
            const { type, message: sensorMessage } = receivedMessage;
            if ((type === GAS_SENSOR_TYPE && sensorMessage >= MAX_GAS_SENSOR) ||
                (type === SMOKE_SENSOR_TYPE && sensorMessage >= MAX_SMOKE_SENSOR) ||
                (type === WATER_SENSOR_TYPE && sensorMessage >= MAX_WATER_SENSOR)) {
                setNotificationIsPresent(true);
                setBadMessage(receivedMessage);
            }
        }
    }, []);

    const closeWs = useCallback(() => {
        if (socket) {
            socket.close();
        }
    }, [socket]);

    const logOut = useCallback(async () => {
        const requestOptions = {
            method: 'POST',
            credentials: 'same-origin'
        };

        try {
            const responseData = await fetch(`${URL_HTTP}/users/logout`, requestOptions).then(r => r.json());

            if (responseData && !responseData.detail) {
                localStorage.removeItem("auth");
                closeWs();
            } else {
                console.log(responseData);
            }
        } catch (error) {
            console.error("Logout Error:", error);
        }

        localStorage.removeItem("auth");
        navigate("../login");
    }, [navigate, closeWs]);

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {innerWidth < 650 && (
                <div className="flex justify-center items-center w-full h-full">
                    <div className="relative min-w-320px min-h-650px w-full h-full bg-dark_main_bg">
                        {isAuth ? {
                            main: <MainPageMobile key="mainPageMobile" message={message} actionLogOut={logOut} connectionStatusWS={connectionStatusWS} />,
                            settings: <SettingsPageMobile key="settingsPageMobile" actionLogOut={logOut} />,
                            scenes: <ScenesPageMobile key="scenesPageMobile" actionLogOut={logOut} />
                        }[route] : <LoginPageMobile key="loginPageMobile" />}
                        {notificationIsPresent && <NotificationModalMobile closeAction={() => setNotificationIsPresent(prev => !prev)} message={{ ...badMessage }} />}
                    </div>
                </div>
            )}
            {innerWidth >= 650 && isAuth && (
                <div className="w-full h-full bg-dark_light_bg grid grid-cols-[minmax(25rem,_1fr)_5fr] grid-rows-[9rem_auto] pr-[2rem] pb-[2rem]">
                    <Menu actionLogOut={logOut} />
                    <Header />
                    <main className="bg-dark_main_bg rounded-[2.5rem] overflow-auto">
                        {isAuth && route === 'main' && <MainPage key="mainPage" message={message} connectionStatusWS={connectionStatusWS} />}
                    </main>
                </div>
            )}
            {notificationIsPresent && <NotificationModalMobile closeAction={() => setNotificationIsPresent(prev => !prev)} message={{ ...badMessage }} />}
            {innerWidth >= 650 && !isAuth && <LoginPageMobile />}
        </>
    );
}

export default App;
