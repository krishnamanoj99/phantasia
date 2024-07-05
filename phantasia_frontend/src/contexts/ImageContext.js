import { createContext } from "react";

const imageContext = createContext({
    newImages : [],
    setNewImages : () => {},
});

export default imageContext;