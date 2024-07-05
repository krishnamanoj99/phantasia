import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import PasswordInput from "../components/shared/PasswordInput";
import TextInput from "../components/shared/TextInput";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const logIn = async () => {
        const data = {email, password};

        const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
        console.log(response.err);

        if(response && !response.err){
            console.log(response);
            const token = response.token  
            console.log(token);
            const date = new Date();
            date.setDate(date.getDate() + 1);
            setCookie("token", token, {path: "/", expires: date});
            // alert("success");
            navigate("/home");
        }
        else{
            alert("Failure");
        }
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div class="w-full bg-darkpurple flex justify-center items-center p-2 shadow-md">
                <img class="h-32 items-center" src="/logo.png"></img>
            </div>
            <div className="inputRegion w-1/4 py-2">
                <div className="font-bold flex flex-col justify-center items-center my-6 mt-12">To continue, log in to Phantasia.</div>
                <TextInput label="Email address or username" placeholder="Email address or username" value={email} setValue={setEmail}/>
                <PasswordInput label="Password" placeholder="Password" value={password} setValue={setPassword}/>
                <div className="flex w-full items-center justify-end">
                    <button className="bg-pomp p-3 px-10 my-3 rounded-full font-semibold text-white" onClick={(e)=>{
                        e.preventDefault();
                        logIn();
                    }}>LOG IN</button>
                </div>
                <div className="border border-grey-800 mt-5"></div>
                <div className="text-xl focus-within:font-bold flex flex-col justify-center items-center mt-6">Don't have an account?</div>
                <div className="flex w-full items-center justify-center">
                    <button className="bg-pomp w-full p-4 px-10 my-3 rounded-full font-semibold text-white">
                        <Link to="/signup">SIGN UP FOR FLARE</Link>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default LoginComponent;