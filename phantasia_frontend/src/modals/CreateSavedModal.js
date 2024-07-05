import TextInput from "../components/shared/TextInput";
import {useState} from 'react'
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const CreateSavedModal = ({closeModal}) => {
    const [savedName, setSavedName] = useState("");
    const [savedThumbnail, setSavedThumbnail] = useState("");

    const createSaved = async () => {
        const response = await makeAuthenticatedPOSTRequest("/saved/create", {
            name: savedName,
            thumbnail: savedThumbnail,
            pins: [],
        })
        console.log(response);
        if(response._id){
            closeModal();
        }
    }

    return (
        <div className="absolute w-screen h-screen left-0 top-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
            <div className="h-1/2 w-1/3 bg-white rounded-3xl flex flex-col items-center p-10 space-y-6 shadow-2xl" onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className="font-semibold text-3xl  text-black">Create collection</div>
                <TextInput label={"Name"} placeholder={"Name"}
                        value={savedName}
                        setValue={setSavedName}/>
          
                <TextInput label={"Thumbnail"} placeholder={"Thumbnail"}
                        value={savedThumbnail}
                        setValue={setSavedThumbnail}/>

                <div className="bg-darkpurple  text-white w-1/5 flex justify-center items-center rounded-full full p-3 cursor-pointer" onClick={createSaved}>
                    Create
                </div>
            </div>
        </div>
    );
}

export default CreateSavedModal;