import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./routes/HomeComponent";
import LoginComponent from "./routes/LoginComponent";
import SignupComponent from "./routes/SignupComponent";
import LoggedInHome from "./routes/LoggedInHome";
import ExploreComponent from "./routes/ExploreComponent";
import CreateComponent from "./routes/CreateComponent";
import SavedComponent from "./routes/SavedComponent";
import LikedComponent from "./routes/LikedComponent";
import MyPinsComponent from "./routes/MyPinsComponent";
import AiComponent from "./routes/AiComponent";
import { useState } from "react";
import { useCookies } from "react-cookie";
import imageContext from "./contexts/ImageContext";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  const [newImages, setNewImages] = useState([]);

  return (
    <div className="w-screen h-screen font-poppins">

      <BrowserRouter>
        {
          cookie.token ? (
            <imageContext.Provider value={{ newImages, setNewImages }}>
              <Routes>
                <Route path="/home" element={<LoggedInHome />} />
                <Route path="/explore" element={<ExploreComponent />} />
                <Route path="/create" element={<CreateComponent />} />
                <Route path="/saved" element={<SavedComponent />} />
                <Route path="/liked" element={<LikedComponent />} />
                <Route path="/mypins" element={<MyPinsComponent />} />
                <Route path="/ai" element={<AiComponent />} />
                <Route path="/*" element={<LoggedInHome />} />
              </Routes>
            </imageContext.Provider>):
        (<Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/*" element={<HomeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
        </Routes>)
        }

      </BrowserRouter>
    </div>
  );
}

export default App;
