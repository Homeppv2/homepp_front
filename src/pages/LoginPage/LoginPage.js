import React, {useState} from 'react';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ChangeScreenButton from "./components/ChangeScreenButton";

const LoginPage = ({wsRun}) => {

    const [loginView, setLoginView] = useState(true)

    return (
        <div className="pt-[3rem] px-[2rem] bg-dark_dark_bg_special h-full">
            <ChangeScreenButton loginActiveFlag={loginView} setLoginView={(flag) => setLoginView(flag)}/>
            {
                loginView ?
                    <LoginScreen wsRun={wsRun} setLoginView={() => setLoginView(false)}/>
                    :
                    <RegisterScreen setLoginView={() => setLoginView(true)}/>
            }
        </div>
    )
};

export default LoginPage;
