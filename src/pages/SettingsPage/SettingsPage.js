import React, {useState} from 'react';
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import DefaultSmokeSensorIcon from "../../components/icons/SmokeSensorIcon/DefaultSmokeSensorIcon";
import ContentScreen from "./screens/ContentScreen";
import AddDeviceScreen from "./screens/AddDeviceScreen";
import DetailDeviceScreen from "./screens/DetailDeviceScreen";

const DETAIL_FLAG_SCREEN = "detailDevice"
const ADD_FLAG_SCREEN = "addDevice"
const CONTENT_FLAG_SCREEN = "content"

const SettingsPage = ({actionLogOut}) => {

    const [listItems, setListItems] = useState([
        {
            name: "Gas sensor",
            icon: <DefaultSmokeSensorIcon/>,
            room: "Kitchen",
        },
        {
            name: "Smoke sensor",
            icon: <DefaultSmokeSensorIcon/>,
            room: "Bathroom"
        },
        {
            name: "Water sensor",
            icon: <DefaultSmokeSensorIcon/>,
            room: "Bedroom"
        }
    ])

    const addDevice = (device) => {
        const temp = [...listItems]
        console.log(device)
        const newDevice = {
            name: "Water sensor",
            icon: <DefaultSmokeSensorIcon/>,
            room: device.location.title
        }
        temp.push(newDevice)
        setListItems([...temp])
        setFlagScreen(CONTENT_FLAG_SCREEN)
    }

    const [flagScreen, setFlagScreen] = useState(CONTENT_FLAG_SCREEN)
    const [detailDeviceID, setDetailDeviceID] = useState(0)

    const openDetailDevice = (id) => {
        setFlagScreen(DETAIL_FLAG_SCREEN)
        setDetailDeviceID(id)
    }

    return (
        <div className="flex flex-col h-full">
            <Header actionLogOut={actionLogOut}/>
            <main
                className={`grow overflow-auto px-[2rem] py-[2rem] ${flagScreen === ADD_FLAG_SCREEN ? "bg-dark_light_bg" : ""}`}>
                {
                    {
                        "content": <ContentScreen addDeviceAction={() => setFlagScreen(ADD_FLAG_SCREEN)}
                                                  listItems={listItems} activeDetailDeviceAction={openDetailDevice}/>,
                        "addDevice": <AddDeviceScreen closeAction={() => setFlagScreen(CONTENT_FLAG_SCREEN)}
                                                      addDeviceAction={addDevice}/>,
                        "detailDevice": <DetailDeviceScreen deviceID={detailDeviceID}
                                                            closeAction={() => setFlagScreen(CONTENT_FLAG_SCREEN)}/>
                    }[flagScreen]
                }
            </main>
            <Footer activeItem={"settings"}/>
        </div>
    );
};

export default SettingsPage;