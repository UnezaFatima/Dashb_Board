// import { useReducer } from "react"
// import { createContext } from "react"
// import DarkModeReducer from "./darkModeContext";
// import { children } from "react";

// const INITIAL_STATE = {
//     darkMode : true,
// }

// export const DarkModeContext = createContext(INITIAL_STATE)

// export const DarkModeContextProvider = ({ Children }) => {
//     const [state, dispatch] = useReducer (DarkModeReducer, INITIAL_STATE);

//     return <DarkModeContext.Provider value={{darkMode:state.darkMode, dispatch}} >
//          {children}
//     </DarkModeContext.Provider>
// }



// import { DarkMode } from "@mui/icons-material";

 const DarkModeReducer = (state, action) =>{
    switch (action.type) {
        case "LIGHT" : {
            return{
                darkMode: false,
            };
        }

        case "DARK" : {
            return{
                darkMode: true,
            };
        }

        case "TOGGLE" : {
            return{
                darkMode: !state.darkMode,
            };
        }
        default:
            return state;

    }
 };

 export default DarkModeReducer;