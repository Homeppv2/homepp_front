import React, {useState} from 'react';
import HeaderMobile from "../../../components/ui/Header/HeaderMobile/HeaderMobile";
import FooterMobile from "../../../components/ui/Footer/FooterMobile/FooterMobile";
import ContentSceneScreenMobile from "./ScenesPageScreensMobile/ContentSceneScreenMobile";
import NightModeIconDark from "../../../components/icons/NightModeIcon/NightModeIconDark";
import MorningModeIcon from "../../../components/icons/MorningModeIcon/MorningModeIcon";
import AddSceneBlockMobile from "./ScenesPageScreensMobile/AddSceneBlockMobile";
import DetailDeviceScreen from "./ScenesPageScreensMobile/DetailSceneScreenMobile";

const DETAIL_FLAG_SCREEN = "detailScene"
export const ADD_FLAG_SCREEN = "addScene"
const CONTENT_FLAG_SCREEN = "content"

const ScenesPageMobile = ({actionLogOut}) => {

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
            <HeaderMobile actionLogOut={actionLogOut}/>
            <main
                className={`grid grow overflow-auto h-full w-full`}>
                {
                    {
                        "content":
                            <ContentSceneScreenMobile listItems={listItems} scenesItems={scenesItems}
                                                      addSceneAction={() => setFlagScreen(ADD_FLAG_SCREEN)}
                                                      flagScreen={flagScreen}/>,
                        "addScene":
                            <ContentSceneScreenMobile listItems={listItems} scenesItems={scenesItems}
                                                      addSceneAction={() => setFlagScreen(ADD_FLAG_SCREEN)}
                                                      flagScreen={flagScreen}/>,
                        "detailDevice": <DetailDeviceScreen deviceID={detailSceneID}
                                                            closeAction={() => setFlagScreen(CONTENT_FLAG_SCREEN)}/>
                    }[flagScreen]
                }
            </main>

            {
                flagScreen === ADD_FLAG_SCREEN &&
                <AddSceneBlockMobile closeAction={() => setFlagScreen(CONTENT_FLAG_SCREEN)} addSceneAction={addScene}/>
            }
            <FooterMobile activeItem={"scenes"}/>
        </div>
    )
        ;
};

export default ScenesPageMobile;