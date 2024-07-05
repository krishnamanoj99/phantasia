import {openUploadWidget} from "../../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../../config";
import { Icon } from "@iconify/react/dist/iconify.js";

const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "do3tlk0cn",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button className="border-2 border-gray-400 bg-white text-black  rounded-md p-6 font-semibold flex flex-col items-center justify-center"
        onClick={uploadImageWidget}>
            <Icon icon="gridicons:create"  fontSize={56} />
            
            Select Image
        </button>
    );
};

export default CloudinaryUpload;
