import { useState, useNavigate } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";

const CreateComponent = () => {
    // const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [uploadedPictureFileName, setUploadedPictureFileName] = useState("");

    const submitPin = async () => {
        const pinUrl = url;
        const data = { pinUrl };
        console.log(data);

        const response = await makeAuthenticatedPOSTRequest("/pin/create", data);

        if (response.err) {
            alert("Could not add pin");
            console.log(response.err)
            return;
        }
        // navigate("/home")
        console.log(response);
    }


    return (
        <LoggedInContainer currentActiveScreen={"create"}>
            <div className="p-10 flex flex-col space-y-4 justify-center">
                <span className="font-semibold text-4xl text-darkpurple">Inspire others - Share a photo of your creation!</span>
                <span className="font-bold text-6xl text-violet-600"> on Phantasia! </span>
            </div>
            <div className="w-full flex flex-col items-center">
                {uploadedPictureFileName ?
                    (
                        <div className="w-1/3 border-2 border-gray-400 bg-white text-black  rounded-md p-6 font-semibold flex flex-col items-center justify-center">
                            {uploadedPictureFileName.substring(0, 25)}...
                        </div>
                    ) : (
                        <CloudinaryUpload setName={setUploadedPictureFileName} setUrl={setUrl} />
                    )
                }

                {/* <input className="w-1/3 focus:outline-none border-2 border-gray-300 rounded shadow-lg bg-gray-100 px-6 py-3" placeholder="Enter the description of the picture" onChange={(e) => setDescription(e.target.value)}></input> */}

                <div className="mt-10 border-2 border-gray-300 bg-darkpurple shadow-lg rounded-md px-8 py-4 text-lg text-white font-semibold flex justify-center cursor-pointer" onClick={submitPin}>Create</div>
            </div>

        </LoggedInContainer>
    );
}

export default CreateComponent;