import React, {useState} from 'react';
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
import ContentSceneScreen from "./screens/ContentSceneScreen";
import NightModeIconDark from "../../components/icons/NightModeIcon/NightModeIconDark";
import MorningModeIcon from "../../components/icons/MorningModeIcon/MorningModeIcon";
import AddSceneBlock from "./screens/AddSceneBlock";
import DetailDeviceScreen from "./screens/DetailSceneScreen";

const DETAIL_FLAG_SCREEN = "detailScene"
export const ADD_FLAG_SCREEN = "addScene"
const CONTENT_FLAG_SCREEN = "content"

const ScenesPage = ({actionLogOut}) => {

    const [listItems, setListItems] = useState([
        {
            name: "Night mode",
            icon: <NightModeIconDark/>,
            rooms: "All rooms",
            numberActions: 24,
        },
        {
            name: "Morning mode",
            icon: <MorningModeIcon/>,
            rooms: "All rooms",
            numberActions: 11,
        },
        {
            name: "Night mode",
            icon: <NightModeIconDark/>,
            rooms: "All rooms",
            numberActions: 24,
        },
    ])

    const scenesItems = [{
        value: "all",
        title: "All scenes"
    }]

    const addScene = (scene) => {
        const temp = [...listItems]
        const newScene = {
            name: "Morning mode",
            icon: <MorningModeIcon/>,
            rooms: "All rooms",
            numberActions: 1
        }
        temp.push(newScene)
        setListItems([...temp])
        setFlagScreen(CONTENT_FLAG_SCREEN)
    }

    const [flagScreen, setFlagScreen] = useState(CONTENT_FLAG_SCREEN)
    const [detailSceneID, setDetailSceneID] = useState(0)

    const openDetailScene = (id) => {
        setFlagScreen(DETAIL_FLAG_SCREEN)
        setDetailSceneID(id)
    }

    return (
        <div className="flex flex-col h-full">
            <Header actionLogOut={actionLogOut}/>
            <main
                className={`grid grow overflow-auto h-full w-full`}>
                {
                    {
                        "content":
                            <ContentSceneScreen listItems={listItems} scenesItems={scenesItems}
                                                addSceneAction={() => setFlagScreen(ADD_FLAG_SCREEN)}
                                                flagScreen={flagScreen}/>,
                        "addScene":
                            <ContentSceneScreen listItems={listItems} scenesItems={scenesItems}
                                                addSceneAction={() => setFlagScreen(ADD_FLAG_SCREEN)}
                                                flagScreen={flagScreen}/>,
                        "detailDevice": <DetailDeviceScreen deviceID={detailSceneID}
                                                            closeAction={() => setFlagScreen(CONTENT_FLAG_SCREEN)}/>
                    }[flagScreen]
                }
            </main>

            {
                flagScreen === ADD_FLAG_SCREEN &&
                <AddSceneBlock closeAction={() => setFlagScreen(CONTENT_FLAG_SCREEN)} addSceneAction={addScene}/>
            }
            <Footer activeItem={"scenes"}/>
        </div>
    )
        ;
};

export default ScenesPage;