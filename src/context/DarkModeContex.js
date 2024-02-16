import { createContext ,useState,useEffect} from "react";

export const DarkMoodContext = createContext();

export const DarkModeContextProvider = ({children}) => {


    const [darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)

    const toggle = () =>{
        setDarkMode(!darkMode)
    }

    useEffect(() => {

    localStorage.setItem("darkMode",darkMode)
    }, [darkMode]);

    return(
        <DarkMoodContext.Provider value={{toggle,darkMode}}>
            {children}
        </DarkMoodContext.Provider>
        )

}