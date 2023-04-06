import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const RegisterComponent = ({setLoginView}) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")


    const registerAction = () => {
        console.log(username, password)
        if (username && email && password) {
            console.log(username, email, password)
            setLoginView(true)
        } else {
            setMessage("Bad input for register")
        }
    }

    return (
        <div className="flex justify-center items-center h-full w-full flex-col p-[2rem]">
            <h2 className="text-dark_text text-h2">Registration</h2>
            <p className="text-red p-[0.5rem] rounded-default w-full">{message}</p>
            <div className="flex flex-col mb-2 w-full">
                <label className="text-dark_text text-big">Username</label>
                <input className="w-full p-[1rem] rounded-default text-light_text bg-dark_text" type="text"
                       onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col mb-8 w-full">
                <label className="text-dark_text text-big">Email</label>
                <input className="w-full p-[1rem] rounded-default text-light_text bg-dark_text" type="email"
                       onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col mb-8 w-full">
                <label className="text-dark_text text-big">Password</label>
                <input className="w-full p-[1rem] rounded-default text-light_text bg-dark_text" type="password"
                       onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className="bg-green drop-shadow-default p-2 text-dark_text rounded-default w-full text-big"
                    onClick={registerAction}>Register
            </button>
            <button onClick={() => setLoginView(true)} className="text-dark_text p-2">Login</button>
        </div>
    );
};

export default RegisterComponent;