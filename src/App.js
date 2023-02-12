import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotificationModal from "./components/shared/NotificationModal/NotificationModal";

export const URL = "ws://localhost:8000/room/1?name=client"
export const MAX_GAS_SENSOR = 0.5

function App({child}) {


    const isAuth = localStorage.getItem("auth")
    const [notificationIsPresent, setNotificationIsPresent] = useState(false)
    const navigate = useNavigate()

    const [websckt, setWebsckt] = useState();
    const [message, setMessage] = useState({});

    const wsRun = () => {
        const ws = new WebSocket(URL)
        ws.onopen = () => {
            console.log('CONNECT')
        };

        ws.onmessage = (e) => {
            const receivedMessage = JSON.parse(e.data);
            setMessage(receivedMessage);
            console.log(receivedMessage)
        };
        setWebsckt(ws);
    }

    useEffect(() => {
        if (message.text) {
            if (message.text >= MAX_GAS_SENSOR) {
                setNotificationIsPresent(true)
            }
        } else {
            setNotificationIsPresent(false)
        }
    }, [message])

    useEffect(() => {
        if (!isAuth) {
            navigate("../login")
        } else {
            wsRun()
        }
    }, [isAuth, navigate])


    return (
        <div className="flex justify-center items-center w-full">
            <div className="relative w-320px h-650px bg-dark_main_bg">
                {
                    isAuth
                        ?
                        child(message)
                        :
                        <LoginPage wsRun={wsRun}/>
                }
                {
                    (notificationIsPresent && isAuth) &&
                    <NotificationModal closeAction={() => setNotificationIsPresent((prev) => !prev)}/>
                }
            </div>
        </div>
    );
}

export default App;
