import React, {useState} from 'react';
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

const LoginPage = ({wsRun}) => {

    const [loginView, setLoginView] = useState(true)

    return (
        <>
            {
                loginView ?
                    <LoginComponent wsRun={wsRun} setLoginView={() => setLoginView(false)}/>
                    :
                    <RegisterComponent setLoginView={() => setLoginView(true)}/>
            }
        </>
    )
};

export default LoginPage;
