import LoggedInContainer from "../containers/LoggedInContainer";
import { useState } from "react";
import unsplash from "../api/Unsplash"
import { Icon } from "@iconify/react/dist/iconify.js";
import PinsContainer from "../components/shared/PinsContainer";

const ExploreComponent = () => {
    const [searchText, setSearchText] = useState("");
    const [newImages, setNewImages] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const searchImages = async (searchText) => {
        try {
            const response = await unsplash.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: searchText,
                }
            });
            const imagesData = response.data.results;
            console.log("you searched for " + searchText); 
            console.log(imagesData);
            setNewImages(imagesData);
        } 
        catch (error) {
            console.error('Error fetching images:', error);
        }
    }

    return (
        <LoggedInContainer currentActiveScreen={"explore"}>
            <div className="h-full w-3/5 rounded-full flex items-center p-4 space-x-4 bg-fairytale mx-6">
                <Icon icon="material-symbols:search" width="1.2rem" height="1.2rem" />
                <input type="text" placeholder="Search" className="w-full focus:outline-none bg-fairytale"
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            searchImages(searchText);
                            setIsSearched(true);
                        }
                    }}>

                </input>
            </div>

            {
                isSearched ? (
                    <div className="p-10 flex flex-col space-y-4 justify-center">
                        <span className="text-2xl text-darkpurple">Search results for <span className="font-bold text-2xl text-darkpurple">{searchText}</span></span>
                        <PinsContainer imagesData={newImages}/>
                    </div>

                ) :
                (
                    <div className="p-24 flex flex-col space-y-4 justify-center">
                        <span className="font-semibold text-4xl text-darkpurple">The image hunt starts here!</span>
                        <span className="font-semibold text-3xl text-darkpurple">Search for images, boards & more on <span className="font-bold text-5xl text-violet-600 pl-1">Phantasia! </span></span>
                        
                    </div> 
                )
            }


        </LoggedInContainer>
    );
}

export default ExploreComponent;