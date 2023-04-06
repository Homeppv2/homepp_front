import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoginComponent = ({wsRun, setLoginView}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()


    const loginAction = () => {
        console.log(username, password)
        if (username === "admin" && password === "password") {
            localStorage.setItem("auth", "1")
            wsRun()
            setMessage("")
            navigate("/")
        } else {
            setMessage("Bad input for login")
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
                       onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col mb-8 w-full">
                <label className="text-dark_text text-big">Password</label>
                <input className="w-full p-[1rem] rounded-default text-light_text bg-dark_text" type="password"
                       onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="bg-green drop-shadow-default p-2 text-dark_text rounded-default w-full text-big"
                    onClick={loginAction}>Login
            </button>
            <button onClick={() => setLoginView(false)} className="text-dark_text p-2">Registration</button>
        </div>)
};

export default LoginComponent;