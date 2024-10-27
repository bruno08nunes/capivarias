import { createContext, useState } from "react";
import getUserLoggedIn from "../utilities/getUserLoggedIn";

export const UserContext = createContext(null);

const UserContextProvider = ({children}) => {
    const userId = getUserLoggedIn();
    const [userInfo, setUser] = useState({
        id: userId,
    });
    
    const user = {
        ...userInfo,
        logout() {
            setUser({});
            localStorage.removeItem("user");
        }
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;