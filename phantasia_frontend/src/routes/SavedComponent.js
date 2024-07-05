import LoggedInContainer from "../containers/LoggedInContainer";
import { useState, useEffect } from 'react';
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const SavedComponent = () => {
    const [mySaved, setMySaved] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/saved/get/me");
            setMySaved(response.data);
            console.log(response.data)
        };
        getData();
    }, []);

    return (
        <LoggedInContainer>
            <span className="font-semibold text-3xl text-darkpurple">Your saved pins on <span className="font-bold text-3xl text-violet-600">Phantasia! </span></span>

            <div className="columns-5 gap-3 w-[1200px] mx-auto space-y-3 p-10 ">
                {mySaved.map((item) => (
                    <img key={item} className="rounded-lg" src={item} alt="Saved Image" />
                ))}
            </div>

        </LoggedInContainer>
    )
}

export default SavedComponent;