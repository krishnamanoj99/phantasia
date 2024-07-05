import LoggedInContainer from "../containers/LoggedInContainer";
import { useState, useEffect } from 'react';
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const LikedComponent = () => {
    const [myLiked, setMyLiked] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/saved/get/liked");
            setMyLiked(response.data);
            console.log(response.data);
        };
        getData();
    }, []);
    return (
        <LoggedInContainer>
            <span className="font-semibold text-3xl text-darkpurple">Liked Pins on <span className="font-bold text-3xl text-violet-600">Phantasia! </span></span>
            <div className="columns-5 gap-3 w-[1200px] mx-auto space-y-3 p-10 ">
                {myLiked.map((item) => (
                    <img key={item} className="rounded-lg" src={item} alt="Saved Image" />
                ))}
            </div>

            
        </LoggedInContainer>
    )
}

export default LikedComponent;