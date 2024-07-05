import LoggedInContainer from "../containers/LoggedInContainer";
import PinsContainer from "../components/shared/PinsContainer";
import unsplash from "../api/Unsplash";
import { useEffect, useState } from "react";

const sampleImages = [
    "/pin.jpg" ,
    "/pin3.jpg",
    "/pin2.jpg",
    "/pin.jpg" ,
    "/pin3.jpg",
    "/pin2.jpg",
    "/pin.jpg" ,
    "/pin3.jpg",
    "/pin2.jpg",
    "/pin.jpg" ,
    "/pin.jpg" ,
    "/pin3.jpg",
    "/pin2.jpg",
    "/pin.jpg" ,
    "/pin3.jpg",
    "/pin3.jpg",
    "/pin2.jpg",
]


const LoggedInHome = () => {
    const [newImages, setNewImages] = useState([]);

    useEffect(() => {
      const fetchImages = async () => {
        const response = await unsplash.get('https://api.unsplash.com/photos/random', {
            params: {
                // query: searchText,
                count: 100, // Number of results per page (optional)
            }});
        console.log(response)
        const imagesData = response.data; 
        console.log(imagesData); // Array of image URLs
        setNewImages(imagesData);
      };

      fetchImages();
    }, []);

    return (
        <LoggedInContainer currentActiveScreen={"home"}>
            {
                newImages.length>0 ? (
                <PinsContainer imagesData={newImages} />) : 
                <p>Loading</p>
            }
            

        </LoggedInContainer>
    );
}

export default LoggedInHome;