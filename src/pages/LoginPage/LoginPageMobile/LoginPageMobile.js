import React, {useState} from 'react';
import LoginScreenMobile from "./ScreensMobile/LoginScreenMobile";
import RegisterScreenMobile from "./ScreensMobile/RegisterScreenMobile";
import ChangeScreenButtonMobile from "./componentsMobile/ChangeScreenButtonMobile";

const LoginPageMobile = ({wsRun}) => {

    const [loginView, setLoginView] = useState(true)

    return (
        <div className="pt-[3rem] px-[2rem] bg-dark_dark_bg_special h-full">
            <ChangeScreenButtonMobile loginActiveFlag={loginView} setLoginView={(flag) => setLoginView(flag)}/>
            {
                loginView ?
                    <LoginScreenMobile wsRun={wsRun} setLoginView={() => setLoginView(false)}/>
                    :
                    <RegisterScreenMobile setLoginView={() => setLoginView(true)}/>
            }
        </div>
    )
};

export default LoginPageMobile;
