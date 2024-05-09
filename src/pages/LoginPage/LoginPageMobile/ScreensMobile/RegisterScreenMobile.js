import React, { useState } from 'react';
import PassiveVewPasswordIcon from "../../../../components/icons/PasswordViewIcon/PassiveVewPasswordIcon";
import ActiveViewPasswordIcon from "../../../../components/icons/PasswordViewIcon/ActiveViewPasswordIcon";
import FacebookIcon from "../../../../components/icons/SocialNetworksIcon/FacebookIcon";
import GoogleIcon from "../../../../components/icons/SocialNetworksIcon/GoogleIcon";

const RegisterScreenMobile = ({ setLoginView }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [passwordView, setPasswordView] = useState(false);

    const registerAction = () => {
        if (confirmPassword && email && password && confirmPassword === password) {
            setLoginView(true);
        } else {
            setMessage("Bad input for register");
        }
    };

    const isPasswordValid = () => {
        // Пример валидации: пароль должен быть длиной минимум 8 символов
        return password.length >= 8;
    };

    const isFormValid = () => {
        return email && isPasswordValid() && password === confirmPassword;
    };

    return (
        <div className="flex justify-center items-center w-full flex-col pt-[1rem]">
            <h1 className="text-white text-h1 w-full">Sign up</h1>
            <p className="text-red rounded-default w-full text-default">{message}</p>

            <div className="flex flex-col mb-2 w-full  mt-[2rem]">
                <div className="flex justify-between">
                    <label className="text-dark_text text-middle ">Email</label>
                    <button className="text-green text-middle ">Register with mobile</button>
                </div>
                <input
                    className="w-full mt-[1rem]  p-[1.5rem]  rounded-default text-dark_text bg-dark_blue_special text-default"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={"Please enter your email"}
                    value={email}/>
            </div>

            <div className="flex flex-col mb-2 mt-[1rem] w-full">
                <label className="text-dark_text text-middle ">Password</label>
                <div
                    className="flex w-full  px-[1.5rem]  mt-[1rem] rounded-default text-dark_text bg-dark_blue_special text-default">
                    <input
                        className="w-full  py-[1.5rem]  text-dark_text bg-dark_blue_special text-default"
                        type={passwordView ? "text" : "password"}
                        placeholder={"Please enter your password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}/>
                    <button className="" onClick={() => setPasswordView(!passwordView)}>
                        {
                            passwordView ? <PassiveVewPasswordIcon/> : <ActiveViewPasswordIcon/>
                        }
                    </button>
                </div>
            </div>

            <div className="flex flex-col mb-2 mt-[1rem] w-full">
                <label className="text-dark_text text-middle ">Confirm password</label>
                <div
                    className="flex w-full  px-[1.5rem]  mt-[1rem] rounded-default text-dark_text bg-dark_blue_special text-default">
                    <input
                        className="w-full  py-[1.5rem]  text-dark_text bg-dark_blue_special text-default"
                        type={passwordView ? "text" : "password"}
                        placeholder={"Please enter your password again"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}/>
                    <button className="" onClick={() => setPasswordView(!passwordView)}>
                        {
                            passwordView ? <PassiveVewPasswordIcon/> : <ActiveViewPasswordIcon/>
                        }
                    </button>
                </div>
            </div>

            <button
                disabled={!isFormValid()}
                className={`bg-green mt-[1rem] drop-shadow-default py-[1.2rem] text-white rounded-default w-full text-gigant ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={registerAction}>
                Sign up
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
    );
};

export default RegisterScreenMobile;
