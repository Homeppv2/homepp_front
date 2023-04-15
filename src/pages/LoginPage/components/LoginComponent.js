import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {URL_HTTP} from "../../../App";
import {useCookies} from "react-cookie";

const LoginComponent = ({wsRun, setLoginView}) => {

        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [message, setMessage] = useState("")
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
                username: username,
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
                localStorage.setItem("auth", "1")
                createCookie(responseData)
                setMessage("")
                navigate("/")
                wsRun()
            } else {
                setMessage(responseData.detail)
                setUsername("")
                setPassword("")
            }
        }

        return (
            <div className="flex justify-center items-center h-full w-full flex-col p-[2rem]">
                <h2 className="text-dark_text text-h2">Login</h2>
                <p className="text-red p-[0.5rem] rounded-default w-full">{message}</p>
                <div className="flex flex-col mb-2 w-full">
                    <label className="text-dark_text text-big">Username</label>
                    <input className="w-full p-[1rem] rounded-default text-light_text bg-dark_text" type="text"
                           onChange={(e) => setUsername(e.target.value)}
                           value={username}/>
                </div>
                <div className="flex flex-col mb-8 w-full">
                    <label className="text-dark_text text-big">Password</label>
                    <input className="w-full p-[1rem] rounded-default text-light_text bg-dark_text" type="password"
                           onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <button disabled={!username || !password}
                        className="bg-green drop-shadow-default p-2 text-dark_text rounded-default w-full text-big"
                        onClick={loginAction}>Login
                </button>
                <button onClick={() => setLoginView(false)}
                        className="text-dark_text p-2">Registration
                </button>
            </div>)
    }
;

export default LoginComponent;