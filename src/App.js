import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotificationModal from "./components/shared/NotificationModal/NotificationModal";

function App({child}) {

    const isAuth = localStorage.getItem("auth")
    const [notificationIsPresent, setNotificationIsPresent] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate("../login")
        }
    }, [isAuth, navigate])


    return (
        <div className="flex justify-center items-center w-full">
            <div className="relative w-320px h-650px bg-dark_main_bg">
                {
                    isAuth
                        ?
                        child()
                        :
                        <LoginPage/>
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
