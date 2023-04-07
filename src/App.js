import {useNavigate} from "react-router-dom"
import {useEffect, useRef, useState} from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotificationModal from "./components/shared/NotificationModal/NotificationModal";
import MainPage from "./pages/MainPage/MainPage";

const CLIENT_ID = "2b70931d-30f0-4a12-a982-a0d996d93417"
export const URL_WS = `ws://95.163.236.35:8001/controllers/connect/ws?client_id=${CLIENT_ID}`
export const URL_HTTP = `http://95.163.236.35:8001`
export const MAX_GAS_SENSOR = 100
export const GAS_SENSOR_TYPE = 'gas'
export const MAX_SMOKE_SENSOR = 100
export const WATER_SENSOR_TYPE = 'water'
export const MAX_WATER_SENSOR = 100
export const SMOKE_SENSOR_TYPE = 'smoke'

function App() {
    const navigate = useNavigate()
    const render = useRef(false)
    const [socket, setSocket] = useState()
    const [notificationIsPresent, setNotificationIsPresent] = useState(false)
    const [message, setMessage] = useState({});
    const [badMessage, setBadMessage] = useState({})
    const [connectionStatusWS, setConnectionStatusWS] = useState(false)

    let isAuth = localStorage.getItem("auth")

    const wsRun = () => {

        let socket = (new WebSocket(URL_WS))

        socket.onopen = () => {
            console.log('CONNECT')
            setConnectionStatusWS(true)
        };

        socket.onmessage = (e) => {
            const receivedMessage = JSON.parse(e.data);
            setMessage(receivedMessage);
            const currentMessage = {...receivedMessage}
            console.log(receivedMessage)
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

        socket.onclose = () => {
            setConnectionStatusWS(false)
            console.log("DISCONNECT")
        }

        socket.onerror = () => {
            socket.close()
        }
        setSocket(socket)
    }

    const closeWs = () => {
        console.log(socket)
        socket.close()
    }

    const logOut = () => {
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
        <div className="flex justify-center items-center w-full">
            <div className="relative w-320px h-650px bg-dark_main_bg">
                {
                    isAuth
                        ?
                        <MainPage message={message} actionLogOut={() => logOut()}
                                  connectionStatusWS={connectionStatusWS}/>
                        :
                        <LoginPage wsRun={() => wsRun()}/>
                }
                {
                    (notificationIsPresent && isAuth) &&
                    <NotificationModal closeAction={() => setNotificationIsPresent((prev) => !prev)}
                                       message={{...badMessage}}/>
                }
            </div>
        </div>
    );
}

export default App;
