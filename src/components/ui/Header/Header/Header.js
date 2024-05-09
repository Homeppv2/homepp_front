import RainIconBig from "../../../icons/WeatherIcon/RainIconBig";
import SearchIcon from "../../../icons/SearchIcon";
import ConnectionIconBig from "../../../icons/ConnectionIcon/ConnectionIconBig";
import Weather from "./Weather";
import CurrentTime from "./CurrentTime";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    color: #ffffff;
    text-align: center;
    font-family: "Titillium Web", sans-serif;
    font-weight: 300;
    font-style: italic;
`;

const Header = () => {
    return (
        <header className="px-[6rem] flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[1rem] items-center">
                <div className="flex flex-col items-center bg-green py-[1rem] px-[1.5rem] rounded-default">
                    <p className="text-dark_text">U</p>
                </div>
                <div className="">
                    <p className="text-white">UserName</p>
                    <p className="text-dark_text text-middle">usermail@demo.com</p>
                </div>
            </div>
            <div className="flex flex-row gap-6 items-center text-white bg-dark_main_bg shadow-default py-[1rem] px-[1.5rem] rounded-default">
                <Container>
                    <Weather />
                </Container>
                <Container>
                    <CurrentTime />
                </Container>
            </div>
            <div className="">
                <div className="flex flex-col">
                    <div className="bg-dark_main_bg shadow-default rounded-default flex flex-row items-center pl-[1.5rem]">
                        <button>
                            <SearchIcon/>
                        </button>
                        <input
                            className="text-dark_text bg-dark_main_bg outline-0 p-[1.5rem] rounded-default"
                            placeholder="Search..."/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <ConnectionIconBig/>
            </div>
        </header>
    );
};

export default Header;
