import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from 'react'
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const PinDetailsModal = ({ id, URL, description, authorFirstName, authorSecondName, closeModal }) => {
    const [mySaveds, setMySaveds] = useState([]);
    const [addedToSaved, setAddedToSaved] = useState(false);
    const [likedPin, setLikedPin] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/saved/get/me")
            console.log(response.data);
            setMySaveds(response.data);
        }
        getData();
    }, []);

    const addPinToSaved = async () => {
        console.log(URL)
        const pinUrl = URL;

        const payload = { pinUrl };
        const response = await makeAuthenticatedPOSTRequest("/saved/add/pin", payload);
        console.log(response);

        if (response._id) {
            setAddedToSaved(false);
        }
    }
    const likePin = async () => {
        console.log(URL)
        const pinUrl = URL;

        const payload = { pinUrl };
        const response = await makeAuthenticatedPOSTRequest("/saved/like/pin", payload);
        console.log(response);

        if (response._id) {
            setLikedPin(false);
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex justify-center items-center" onClick={closeModal}>
            <div className="h-4/5 w-1/2 bg-gradient-to-b from-white to-gray-400 border-2 shadow-5xl flex flex-col rounded-lg items-center space-y-6" onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className="columns-2 gap-5 h-full">
                    <div className=" flex items-center justify-center w-full h-full p-3 rounded-l-lg bg-black overflow-hidden">
                        <img className="rounded-2xl overflow-hidden" src={URL}></img>
                    </div>
                    <div className="space-y-3 h-full w-full p-6">
                        <div className="font-semibold text-4xl">{description}</div>
                        <div className="text-md">by <span className="font-semibold">{authorFirstName}</span> <span className="font-semibold">{authorSecondName}</span></div>
                        <div className="border-2 border-b-black"></div>
                        <div className="flex space-x-4">
                            <div className={`bg-red-800 h-full p-3 font-semibold rounded-full flex items-center justify-center cursor-pointer hover:bg-red-400 text-white `} onClick={()=>likePin()}>
                                <Icon icon="mdi:heart" fontSize={32} /> Like
                            </div>
                            <div className={`bg-green-600 h-full p-3 font-semibold rounded-full flex items-center justify-center cursor-pointer hover:bg-green-300 text-white`}>
                                <Icon icon="material-symbols:bookmark" fontSize={32} onClick={()=>addPinToSaved()}/>
                                    Save
                            </div>
                        </div>
                        
                        {/* <div className="font-semibold text-xl  text-black mt-3" >save</div> */}

                        {/* <div className="h-2/5 flex flex-col space-y-4 max-h-40 overflow-y-auto scrollbar scrollbar-thumb-black">
                            {
                                !addedToSaved ? (
                                    mySaveds.map((item) => {
                                        return <PlaylistListComponent info={item} addPinToSaved={addPinToSaved} />
                                    })
                                ) :
                                    (<div>Saved</div>)
                            }

                        </div> */}


                    </div>
                </div>

            </div>
        </div>
    );
}

export default PinDetailsModal;