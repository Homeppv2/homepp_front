import React, {useState} from 'react';
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import DefaultSmokeSensorIcon from "../../components/icons/SmokeSensorIcon/DefaultSmokeSensorIcon";
import ContentDeviceScreen from "./screens/ContentDeviceScreen";
import AddDeviceScreen from "./screens/AddDeviceScreen";
import DetailDeviceScreen from "./screens/DetailDeviceScreen";

const DETAIL_FLAG_SCREEN = "detailDevice"
const ADD_FLAG_SCREEN = "addDevice"
const CONTENT_FLAG_SCREEN = "content"

const SettingsPage = ({actionLogOut}) => {

    const [listItems, setListItems] = useState([
        {
            name: "Gas sensor",
            icon: <DefaultSmokeSensorIcon width={15}/>,
            room: "Kitchen",
            unit: "%LED",
            value: 45,
        },
        {
            name: "Smoke sensor",
            icon: <DefaultSmokeSensorIcon width={15}/>,
            room: "Bathroom",
            unit: "%LED",
            value: 45,
        },
        {
            name: "Water sensor",
            icon: <DefaultSmokeSensorIcon width={15}/>,
            room: "Bedroom",
            unit: "%LED",
            value: 45,
        }
    ])

    const addDevice = (device) => {
        const temp = [...listItems]
        const newDevice = {
            name: "Water sensor",
            icon: <DefaultSmokeSensorIcon/>,
            room: device.location.title,
            unit: "%",
            value: 58
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
            {
                flagScreen !== ADD_FLAG_SCREEN && flagScreen !== DETAIL_FLAG_SCREEN &&
                <Header actionLogOut={actionLogOut}/>
            }
            <main
                className={`grow overflow-auto px-[2rem] py-[2rem]`}>
                {
                    {
                        "content": <ContentDeviceScreen addDeviceAction={() => setFlagScreen(ADD_FLAG_SCREEN)}
                                                        listItems={listItems}
                                                        activeDetailDeviceAction={openDetailDevice}/>,
                        "addDevice": <AddDeviceScreen closeAction={() => setFlagScreen(CONTENT_FLAG_SCREEN)}
                                                      addDeviceAction={addDevice}/>,
                        "detailDevice": <DetailDeviceScreen deviceID={detailDeviceID}
                                                            closeAction={() => setFlagScreen(CONTENT_FLAG_SCREEN)}/>
                    }[flagScreen]
                }
            </main>
            {
                flagScreen !== ADD_FLAG_SCREEN && flagScreen !== DETAIL_FLAG_SCREEN &&
                <Footer activeItem={"settings"}/>
            }
        </div>
    );
};

export default SettingsPage;