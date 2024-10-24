// import { darkMode } from "@mui/icons-material";

//  const DarkModeReducer = (state, action) =>{
//     switch (action.type) {
//         case "LIGHT" : {
//             return{
//                 darkMode: false,
//             };
//         }

//         case "DARK" : {
//             return{
//                 darkMode: true,
//             };
//         }

//         case "TOGGLE" : {
//             return{
//                 darkMode: !state.darkMode,
//             };
//         }
//         default:
//             return state;

//     }
//  };

//  export default DarkModeReducer;

import { useReducer } from "react"
import { createContext } from "react"
import DarkModeReducer from "./darkModeReducer";
// import { children } from "react";

const INITIAL_STATE = {
    darkMode : false,
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer (DarkModeReducer, INITIAL_STATE);

    return <DarkModeContext.Provider value={{darkMode:state.darkMode, dispatch}} >
         {children}
    </DarkModeContext.Provider>
}