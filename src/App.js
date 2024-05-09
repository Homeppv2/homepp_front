import {useNavigate} from "react-router-dom"
import {useEffect, useRef, useState} from "react";
import LoginPageMobile from "./pages/LoginPage/LoginPageMobile/LoginPageMobile";
import NotificationModalMobile from "./components/shared/NotificationModalMobile/NotificationModalMobile";
import MainPageMobile from "./pages/MainPage/MainPageMobile/MainPageMobile";
import SettingsPageMobile from "./pages/SettingsPage/SettingsPageMobile/SettingsPageMobile";
import ScenesPageMobile from "./pages/ScenesPage/ScenesPageMobile/ScenesPageMobile";
import Menu from "./components/ui/Menu/Menu";
import Header from "./components/ui/Header/Header/Header";
import MainPage from "./pages/MainPage/MainPage/MainPage";

export const URL_WS = `ws://194.67.78.39:8001/controllers/connect/ws`
export const URL_HTTP = `http://194.67.78.39:8001`
export const MAX_GAS_SENSOR = 100
export const GAS_SENSOR_TYPE = 'gas'
export const MAX_SMOKE_SENSOR = 100
export const WATER_SENSOR_TYPE = 'water'
export const MAX_WATER_SENSOR = 100
export const SMOKE_SENSOR_TYPE = 'smoke'
export const AIR_QUALITY_SENSOR_TYPE = 'air_quality'

function App({route}) {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    window.addEventListener('resize', function (event) {
        setInnerWidth(window.innerWidth)
    }, true);

    const navigate = useNavigate()
    const render = useRef(false)
    const [socket, setSocket] = useState()
    const [notificationIsPresent, setNotificationIsPresent] = useState(false)
    const [message, setMessage] = useState({});
    const [badMessage, setBadMessage] = useState({})
    const [connectionStatusWS, setConnectionStatusWS] = useState(false)

    let isAuth = localStorage.getItem("auth")

    const wsRun = () => {

        let socket = new WebSocket(URL_WS + `?session_id=${localStorage.getItem("auth")}`)
        socket.onopen = () => {
            setConnectionStatusWS(true)
        };

        socket.onmessage = (e) => {
            const receivedMessage = JSON.parse(e.data);
            setMessage(receivedMessage);
            const currentMessage = {...receivedMessage}
            if (receivedMessage.message && receivedMessage.type) {
                const gasIsBad = receivedMessage.type === GAS_SENSOR_TYPE && receivedMessage.message >= MAX_GAS_SENSOR
                const smokeIsBad = receivedMessage.type === SMOKE_SENSOR_TYPE && receivedMessage.message >= MAX_SMOKE_SENSOR
                const waterIsBad = receivedMessage.type === WATER_SENSOR_TYPE && receivedMessage.message >= MAX_WATER_SENSOR
                if (gasIsBad || smokeIsBad || waterIsBad) {
                    setNotificationIsPresent(true)
                    setBadMessage(currentMessage)
                }
            }
        };
        setSocket(socket)

        socket.onclose = () => {
            setConnectionStatusWS(false)
        }

        socket.onerror = (error) => {
            socket.close()
        }
    }

    const closeWs = () => {
        socket.close()
    }

    const logOut = async () => {
        const requestOptions = {
            method: 'POST',
            credentials: 'same-origin'
        }
        let responseData = await fetch(`${URL_HTTP}/users/logout`, requestOptions).then(r => {
            return r.json()
        })
        console.log(responseData.detail)
        if (!responseData.detail) {
            localStorage.removeItem("auth")
            wsRun()
        } else {
            console.log(responseData)
        }
        localStorage.removeItem("auth")
        navigate("../login")
        closeWs()
    }

    useEffect(() => {
        if (!isAuth) {
            navigate("../login")
        } else {
            if (!render.current) {
                render.current = true
                wsRun()
            }
        }
    }, [isAuth])

    return (
        <>
            {
                innerWidth < 650 &&
                <div className="flex justify-center items-center w-full h-full">
                    <div className="relative min-w-320px min-h-650px w-full h-full bg-dark_main_bg">
                        {
                            isAuth
                                ?
                                {
                                    "main": <MainPageMobile message={message} actionLogOut={() => logOut()}
                                                            connectionStatusWS={connectionStatusWS}/>,
                                    "settings": <SettingsPageMobile actionLogOut={() => logOut()}/>,
                                    "scenes": <ScenesPageMobile actionLogOut={() => logOut()}/>
                                }[route]
                                :
                                <LoginPageMobile wsRun={() => wsRun()}/>
                        }
                        {
                            (notificationIsPresent && isAuth) &&
                            <NotificationModalMobile closeAction={() => setNotificationIsPresent((prev) => !prev)}
                                                     message={{...badMessage}}/>
                        }
                    </div>
                </div>
            }
            {
                innerWidth >= 650 && isAuth &&
                <div
                    className="w-full h-full bg-dark_light_bg grid grid-cols-[minmax(25rem,_1fr)_5fr] grid-rows-[9rem_auto] pr-[2rem] pb-[2rem]">
                    <Menu actionLogOut={() => logOut()}/>
                    <Header/>
                    <main className="bg-dark_main_bg rounded-[2.5rem] overflow-auto">
                        {
                            isAuth &&
                            {
                                "main": <MainPage message={message}
                                                  connectionStatusWS={connectionStatusWS}/>,
                            }[route]
                        }
                    </main>
                </div>
            }
            {
                (notificationIsPresent && isAuth) &&
                <NotificationModalMobile closeAction={() => setNotificationIsPresent((prev) => !prev)}
                                         message={{...badMessage}}/>
            }
            {
                innerWidth >= 650 && !isAuth &&
                <LoginPageMobile wsRun={() => wsRun()}/>
            }
        </>

    );
}

export default App;
