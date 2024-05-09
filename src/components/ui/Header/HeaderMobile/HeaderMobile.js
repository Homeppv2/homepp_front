import React from 'react';
import PropTypes from 'prop-types';
import AvatarBlockMobile from "./AvatarBlockMobile";
import SearchIcon from "../../../icons/SearchIcon";
import ConnectionIconSmall from "../../../icons/ConnectionIcon/ConnectionIconSmall";
import Weather from "../Header/Weather";
import CurrentTime from "../Header/CurrentTime";
import styled from "styled-components";

const WeatherContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    color: #ffffff;
    text-align: center;
    font-family: "Titillium Web", sans-serif;
    font-weight: 300;
    font-style: italic;
`;

const CurrentTimeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    color: #ffffff;
    text-align: center;
    font-family: "Titillium Web", sans-serif;
    font-weight: 300;
    font-style: italic;
`;

const HeaderMobile = ({ actionLogOut }) => {
    return (
        <header
            className="px-[2rem] bg-dark_light_bg py-[1.4rem] w-full flex flex-row justify-between items-center drop-shadow-default z-20">
            <div className="flex flex-row items-center">
                <AvatarBlockMobile actionOnClick={actionLogOut} text={"Exit"}/>
                <div className="ml-[2.5rem] mr-[1.8rem]">
                    <ConnectionIconSmall/>
                </div>

                <div className="flex flex-row gap-6 items-center text-white bg-dark_main_bg shadow-default py-[1rem] px-[1.5rem] rounded-default">
                    <WeatherContainer>
                        <Weather />
                    </WeatherContainer>
                    <CurrentTimeContainer>
                        <CurrentTime />
                    </CurrentTimeContainer>
                </div>
            </div>

            <div className="">
                <button><SearchIcon/></button>
            </div>
        </header>
    );
};

HeaderMobile.propTypes = {
    actionLogOut: PropTypes.func.isRequired,
};

export default HeaderMobile;
