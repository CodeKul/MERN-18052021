import { createContext, useState } from "react";

export const themeContext = createContext()  //1

export default function DarkThemeProvider({children}){  //2
    const[dark,setDark]=useState(false)
    function toggleTheme(){
        setDark(!dark)
    }
    return(
        <themeContext.Provider value={[dark,toggleTheme]}>
            {children}
        </themeContext.Provider>
    )
}