import LoggedInContainer from "../containers/LoggedInContainer";
import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const MyPinsComponent = () => {
    const [pinData, setPinData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/pin/get/mypins"
            );
            setPinData(response.data);
            // console.log(response);
        };
        getData();
    }, []);    

    return (
        <LoggedInContainer>
            <span className="font-semibold text-3xl text-darkpurple">My Pins on <span className="font-bold text-3xl text-violet-600">Phantasia! </span></span>

            <div className="columns-5 gap-3 w-[1200px] mx-auto space-y-3 p-10 ">
                {pinData.map((item) => (
                    <img key={item} className="rounded-lg" src={item} alt="Saved Image" />
                ))}
            </div>
        
        </LoggedInContainer>
    )

}

export default MyPinsComponent;