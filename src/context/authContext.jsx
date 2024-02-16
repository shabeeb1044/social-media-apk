
import { createContext ,useState,useEffect} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {


    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    // const [currentUser, setCurrentUser] = useState(
    //     JSON.parse(localStorage.getItem("user")) || null
    //   );
    

    const login = () =>{    
       
       setCurrentUser({
        "id":1,
        "name":"John do",
        "profilePic":"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",

    });


    console.log(setCurrentUser);
    }

    useEffect(() => {
        let myObj_serialized = JSON.stringify(currentUser);
localStorage.setItem("user", myObj_serialized);
console.log(localStorage);
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{login,currentUser}}>
            {children}
        </AuthContext.Provider>
        )

}