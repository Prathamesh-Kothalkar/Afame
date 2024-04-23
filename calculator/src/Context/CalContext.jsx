import { createContext, useState } from "react";

export const CalContext=createContext(null);

export const CalProvider=({children})=>{
    const [dvalue,setDValue]=useState("");
    return(
        <CalContext.Provider value={{dvalue,setDValue}}>
            {children}
        </CalContext.Provider>
    )
}