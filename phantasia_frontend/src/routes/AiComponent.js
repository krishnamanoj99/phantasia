import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";
import PinsContainer from "../components/shared/PinsContainer";
import { openAI_API_KEY } from "../api/config";

const API_KEY = openAI_API_KEY;
const AiComponent = () => {
    const [searchText, setSearchText] = useState("");
    const [newImages, setNewImages] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        if(isSearched)
            getImages(searchText);
    }, []);

    const getImages = async (searchText) => {
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "prompt": searchText,
                "n": 4,
                "size": "1024x1024"
            })
        }
        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', options);
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <LoggedInContainer currentActiveScreen={"ai"}>
            <div className="h-full w-3/5 rounded-full flex items-center p-4 space-x-4 bg-fairytale mx-6">
                <Icon icon="material-symbols:search" width="1.2rem" height="1.2rem" />
                <input type="text" placeholder="Search" className="w-full focus:outline-none bg-fairytale"
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setIsSearched(true);
                            getImages(searchText)
                        }
                    }}>

                </input>
            </div>

            {
                isSearched ? (
                    <div className="p-10 flex flex-col space-y-4 justify-center">
                        <span className="text-2xl text-darkpurple">Search results for <span className="font-bold text-2xl text-darkpurple">{searchText}</span></span>
                        <PinsContainer imagesData={newImages} />
                    </div>

                ) :
                    (
                        <div className="p-24 flex flex-col space-y-4 justify-center">
                            <span className="font-semibold text-4xl text-darkpurple">Dream it. Generate it. </span>
                            <span className="font-bold text-5xl text-violet-600"> <span className="font-semibold text-4xl text-darkpurple">with </span>Phantasia AI Image Generator</span>
                            <span className="text-xl text-darkpurple">Powered by <span className="font-bold">OpenAI's DALLE </span></span>
                        </div>
                    )
            }

        </LoggedInContainer>
    )
}

export default AiComponent;