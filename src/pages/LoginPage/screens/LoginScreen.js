import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {URL_HTTP} from "../../../App";
import {useCookies} from "react-cookie";
import FacebookIcon from "../../../components/icons/SocialNetworksIcon/FacebookIcon";
import GoogleIcon from "../../../components/icons/SocialNetworksIcon/GoogleIcon";
import ActiveViewPasswordIcon from "../../../components/icons/PasswordViewIcon/ActiveViewPasswordIcon";
import PassiveVewPasswordIcon from "../../../components/icons/PasswordViewIcon/PassiveVewPasswordIcon";

const LoginScreen = ({wsRun, setLoginView}) => {

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [message, setMessage] = useState("")
        const [passwordView, setPasswordView] = useState(false)
        const navigate = useNavigate()

        const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

        const createCookie = (data) => {
            setCookie("auth", data, {
                path: "/"
            });
        }

        const createFormBody = (details) => {
            let formBody = [];
            for (let property in details) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            return formBody
        }
        const loginAction = async () => {
            let details = {
                username: email,
                password: password
            }
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: createFormBody(details)
            }
            let responseData = await fetch(`${URL_HTTP}/users/login`, requestOptions).then(r => {
                return r.json()
            })
            if (!responseData.detail) {
                console.log(responseData)
                localStorage.setItem("auth", "1")
                createCookie(responseData)
                setMessage("")
                navigate("/")
                wsRun()
            } else {
                setMessage(responseData.detail)
                setEmail("")
                setPassword("")
            }
        }

        return (
            <div className="flex justify-center items-center w-full flex-col pt-[1rem]">
                <h1 className="text-white text-h1 w-full">Sign in</h1>
                <p className="text-red rounded-default w-full text-default">{message}</p>
                <div className="flex flex-col mb-2 w-full mt-[2rem]">
                    <div className="flex justify-between">
                        <label className="text-dark_text text-middle ">Email</label>
                        <button className="text-green text-middle ">Sign in with mobile</button>
                    </div>
                    <input
                        className="w-full mt-[1rem] p-[1.5rem] rounded-default text-dark_text bg-dark_blue_special text-default"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"Enter your email"}
                        value={email}/>
                </div>

                <div className="flex flex-col mb-2 mt-[1rem] w-full">
                    <label className="text-dark_text text-middle ">Password</label>
                    <div
                        className="flex w-full  px-[1.5rem]  mt-[1rem] rounded-default text-dark_text bg-dark_blue_special text-default">
                        <input
                            className="w-full py-[1.5rem] text-dark_text bg-dark_blue_special text-default"
                            type={passwordView ? "text" : "password"}
                            placeholder={"Enter your password"}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}/>
                        <button className="" onClick={() => setPasswordView(!passwordView)}>
                            {
                                passwordView ? <PassiveVewPasswordIcon/> : <ActiveViewPasswordIcon/>
                            }
                        </button>
                    </div>
                </div>

                <div className="flex justify-start w-full">
                    <a className="text-green text-middle ">Forgot password?</a>
                </div>

                <button disabled={!email || !password}
                        className="bg-green mt-[1rem] drop-shadow-default py-[1.2rem] text-white rounded-default w-full text-gigant"
                        onClick={loginAction}>Sign in
                </button>

                <div className="flex flex-col w-full items-center mt-[2rem]">
                    <p className="text-white text-default mb-[1.5rem]">Or login with</p>

                    <div className="w-full grid grid-cols-2 gap-[2rem]">
                        <button
                            className={"w-full flex text-white justify-center py-[1.2rem] rounded-default bg-dark_light_special"}>
                            <div className="flex items-center">
                                <FacebookIcon/>
                                <p className="text-white ml-[1rem] text-middle ">Facebook</p></div>
                        </button>

                        <button
                            className={"w-full flex text-white justify-center py-[1.2rem] rounded-default bg-dark_light_special"}>
                            <div className="flex items-center">
                                <GoogleIcon/>
                                <p className="text-white ml-[1rem] text-middle ">Google</p></div>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
;

export default LoginScreen;